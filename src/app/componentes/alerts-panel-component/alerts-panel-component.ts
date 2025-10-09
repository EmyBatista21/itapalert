import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alert } from '../../models/alert';
import { AlertService } from '../../service/alert-service';
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
  filtros: any = {};
  bairros: string[] = [];
  tipos: string[] = [];
  statusList: string[] = [];

  @Output() alertSelected = new EventEmitter<Alert>();

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.loadAlerts();
    this.carregarOpcoesDeFiltros();
  }

  /** 🔍 Carrega os alertas filtrados do serviço */
  loadAlerts(filters: any = {}): void {
    this.alertService.getFilteredAlerts(filters).subscribe((data) => {
      this.alerts = data;
      this.alertSelected.emit();
    });
  }

  /** 🧠 Lê todos os registros do localStorage e gera as opções únicas para os selects */
  carregarOpcoesDeFiltros(): void {
    const storedAlerts = localStorage.getItem('alerts');
    if (storedAlerts) {
      const allAlerts: Alert[] = JSON.parse(storedAlerts);

      // gera listas únicas dinamicamente
      this.bairros = Array.from(new Set(allAlerts.map(a => a.location).filter(Boolean)));
      this.tipos = Array.from(new Set(allAlerts.map(a => a.type).filter(Boolean)));
      this.statusList = Array.from(new Set(allAlerts.map(a => a.status).filter(Boolean)));
    }
  }

  /** 🔄 Quando o usuário muda um filtro */
  onFilterChange(event: Event, field: string): void {
    const value = (event.target as HTMLSelectElement).value;
    this.applyFilter(field, value);
  }

  /** 🔧 Aplica filtros e recarrega os dados */
  applyFilter(field: string, value: string): void {
    this.filtros[field] = value;
    this.loadAlerts(this.filtros);
  }

  /** 📍 Evento de seleção de alerta */
  onViewOnMap(alert: Alert): void {
    this.alertSelected.emit(alert);
  }
}
