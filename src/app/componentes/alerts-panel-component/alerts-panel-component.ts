import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alert } from '../../models/alert';
import { AlertsItemComponent } from '../alerts-item-component/alerts-item-component';

@Component({
  selector: 'app-alerts-panel',
  standalone: true,
  templateUrl: './alerts-panel-component.html',
  styleUrls: ['./alerts-panel-component.css'],
  imports: [CommonModule, AlertsItemComponent],
})
export class AlertsPanelComponent implements OnInit {
  alerts: Alert[] = [];
  filtros: { [key: string]: string } = {};
  bairros: string[] = [];
  tipos: string[] = [];
  statusList: string[] = [];

  @Output() alertSelected = new EventEmitter<{ lat: number; lng: number }>();

  ngOnInit(): void {
    this.loadAlerts();
    this.carregarOpcoesDeFiltros();
  }

  /** Carrega os alertas do localStorage aplicando filtros se existirem */
  loadAlerts(filters: { [key: string]: string } = {}): void {
    const storedAlerts = localStorage.getItem('alerts');
    if (!storedAlerts) {
      this.alerts = [];
      return;
    }

    let allAlerts: Alert[] = JSON.parse(storedAlerts);

    // Aplica filtros de forma segura
    for (const key in filters) {
      const filterValue = filters[key];
      if (filterValue) {
        allAlerts = allAlerts.filter(alert => (alert as any)[key] === filterValue);
      }
    }

    this.alerts = allAlerts;
  }

  /** Gera as opções únicas para filtros */
  carregarOpcoesDeFiltros(): void {
    const storedAlerts = localStorage.getItem('alerts');
    if (!storedAlerts) return;

    const allAlerts: Alert[] = JSON.parse(storedAlerts);

    this.bairros = Array.from(new Set(allAlerts.map(a => a.location).filter(Boolean)));
    this.tipos = Array.from(new Set(allAlerts.map(a => a.type).filter(Boolean)));
    this.statusList = Array.from(new Set(allAlerts.map(a => a.status).filter(Boolean)));
  }

  /** Quando o usuário muda um filtro */
  onFilterChange(event: Event, field: string): void {
    const value = (event.target as HTMLSelectElement).value;
    this.applyFilter(field, value);
  }

  /** Aplica filtro e recarrega os alertas */
  applyFilter(field: string, value: string): void {
    this.filtros[field] = value;
    this.loadAlerts(this.filtros);
  }

  /** Repassa para o mapa as coordenadas reais do alerta */
  onViewOnMap(alerta: Alert): void {
    if (alerta.lat != null && alerta.lng != null) {
      this.alertSelected.emit({ lat: alerta.lat, lng: alerta.lng });
    } else {
      console.warn('Alerta sem coordenadas:', alerta);
      alert('Este alerta não possui coordenadas válidas.');
    }
  }
}
