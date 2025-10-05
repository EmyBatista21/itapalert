// src/app/service/alert-service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private storageKey = 'alerts';
  private alerts$: BehaviorSubject<Alert[]> = new BehaviorSubject<Alert[]>(this.loadFromStorage());

  constructor() {}

  private loadFromStorage(): Alert[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  private saveToStorage(alerts: Alert[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(alerts));
  }

  // 🔹 Método usado pelo AlertsPanel com filtros
  getFilteredAlerts(filters: any = {}): Observable<Alert[]> {
    return this.alerts$.asObservable();
  }

  // 🔹 Método usado pelo HomeComponent
  getAllAlerts(): Observable<Alert[]> {
    return this.alerts$.asObservable();
  }

  addAlert(alert: Alert) {
    const current = this.alerts$.value;
    const newAlert = { ...alert, id: current.length + 1 };
    const updated = [...current, newAlert];
    this.alerts$.next(updated);
    this.saveToStorage(updated);
  }
}
