// src/app/components/map/map.component.ts

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Alert } from '../../models/alert';
import { CommonModule } from '@angular/common'; // <-- Novo Import
@Component({
  selector: 'app-map',
  imports: [CommonModule], 
  templateUrl: './map-component.html',
  styleUrl: './map-component.css'
})
export class MapComponent implements OnChanges {
  @Input() alerts: Alert[] = [];
  @Input() selectedAlert: Alert | null = null; // Alerta para destacar no mapa

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedAlert'] && this.selectedAlert) {
      console.log('Foco no mapa alterado para:', this.selectedAlert.title, ' em (', this.selectedAlert.latitude, ',', this.selectedAlert.longitude, ')');
      // Lógica real: centralizar o mapa na latitude/longitude do selectedAlert e destacar o marcador
    }
    if (changes['alerts']) {
      // Lógica real: Renderizar todos os marcadores no mapa
    }
  }

  // Lógica para renderizar marcadores baseada na lista de 'alerts'
}