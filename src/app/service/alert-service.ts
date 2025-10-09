import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
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

  /** 
   * 🔹 Retorna os alertas filtrados com base nos campos enviados
   * Exemplo de filtros: { bairro: 'Centro', tipo: '', status: 'pendente' }
   */
  getFilteredAlerts(filters: any = {}): Observable<Alert[]> {
  const all = this.loadFromStorage();

  const filtered = all.filter(alert => {
    const matchLocation =
      !filters.location || alert.location.toLowerCase() === filters.location.toLowerCase();
    const matchType =
      !filters.type || alert.type.toLowerCase() === filters.type.toLowerCase();
    const matchStatus =
      !filters.status || alert.status.toLowerCase() === filters.status.toLowerCase();
    return matchLocation && matchType && matchStatus;
  });

  this.alerts$.next(filtered);
  return this.alerts$.asObservable();
}


  /** 🔹 Retorna todos os alertas (sem filtros) */
  getAllAlerts(): Observable<Alert[]> {
    return this.alerts$.asObservable();
  }

  /** 🔹 Adiciona um novo alerta */
  addAlert(alert: Alert) {
    const current = this.alerts$.value;
    const newAlert = { ...alert, id: current.length + 1 };
    const updated = [...current, newAlert];
    this.alerts$.next(updated);
    this.saveToStorage(updated);
  }
}
