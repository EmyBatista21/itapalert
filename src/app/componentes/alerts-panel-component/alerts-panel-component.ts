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
  latitude = 0;
  longitude = 0;
  deltaLat = 0.0010; // cada passo na latitude
  deltaLng = 0.0030;

  @Output() alertSelected = new EventEmitter<{ lat: number; lng: number }>();

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.loadAlerts();
    this.carregarOpcoesDeFiltros();
  }

  /** 🔍 Carrega os alertas filtrados do serviço */
  loadAlerts(filters: any = {}): void {
    this.alertService.getFilteredAlerts(filters).subscribe((data) => {
      this.alerts = data;
      // NÃO emitimos alertSelected aqui, só ao clicar no botão
    });
  }

  /** 🧠 Lê todos os registros do localStorage e gera as opções únicas para os selects */
  carregarOpcoesDeFiltros(): void {
    const storedAlerts = localStorage.getItem('alerts');
    if (storedAlerts) {
      const allAlerts: Alert[] = JSON.parse(storedAlerts);

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

  /** 📍 Evento repassado do AlertsItemComponent */
  onViewOnMap(alert: any) {
    // Para teste, sempre enviar coordenadas fixas
    this.alertSelected.emit({ lat: -12.992387 + this.latitude , lng: -38.664135  + this.longitude});
    this.latitude += this.deltaLat;
    this.longitude += this.deltaLng;
  }
}
