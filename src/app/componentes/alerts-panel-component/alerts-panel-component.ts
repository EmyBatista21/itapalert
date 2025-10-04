// src/app/components/alerts-panel/alerts-panel.component.ts

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Alert } from '../../models/alert';
import { AlertService } from '../../service/alert-service';
import { AlertsItemComponent } from '../alerts-item-component/alerts-item-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alerts-panel',
  templateUrl: './alerts-panel-component.html',
  styleUrl: './alerts-panel-component.css',
  imports: [AlertsItemComponent, CommonModule]
})
export class AlertsPanelComponent implements OnInit {
  alerts: Alert[] = [];
  @Output() alertSelected = new EventEmitter<Alert>();

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadAlerts();
  }

  loadAlerts(filters: any = {}): void {
    this.alertService.getFilteredAlerts(filters).subscribe(data => {
      this.alerts = data;
      // Opcional: emitir a lista completa para o mapa renderizar todos os marcadores inicialmente
      this.alertSelected.emit(); // Envia um evento "vazio" para sinalizar que a lista foi atualizada
    });
  }

  onViewOnMap(alert: Alert): void {
    // Ao clicar em 'Ver no mapa', o evento é emitido para o componente pai (HomeComponent)
    this.alertSelected.emit(alert);
  }

  // Método de exemplo para aplicar filtros (chamar no clique dos botões de filtro)
  // applyFilter(filterType: string, value: string) {
  //   // lógica para atualizar os filtros e chamar loadAlerts()
  // }
}