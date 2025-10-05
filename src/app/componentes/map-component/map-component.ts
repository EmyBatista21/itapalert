// src/app/components/map/map.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Alert } from '../../models/alert';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './map-component.html',
  styleUrl: './map-component.css'
})
export class MapComponent implements OnChanges {
  @Input() alerts: Alert[] = [];
  @Input() selectedAlert: Alert | null = null; // Alerta para destacar no mapa

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['alerts'] && this.alerts) {
      console.log('🔄 Renderizando marcadores para alertas:', this.alerts);
      // Aqui vai a lógica para adicionar marcadores no mapa (Google Maps ou outro)
    }

    if (changes['selectedAlert'] && this.selectedAlert) {
      console.log(
        '📍 Centralizando no alerta:',
        this.selectedAlert.title,
        'em (',
        (this.selectedAlert as any).latitude,
        ',',
        (this.selectedAlert as any).longitude,
        ')'
      );
      // Aqui vai a lógica real de centralizar o mapa no alerta selecionado
    }
  }
}
