import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule], // ✅ adiciona CommonModule
  selector: 'app-alerts-item-component',
  templateUrl: './alerts-item-component.html',
  styleUrls: ['./alerts-item-component.css']
})
export class AlertsItemComponent {
  @Input() alert: any;
  @Output() viewOnMap = new EventEmitter<{ lat: number; lng: number }>();

  onViewOnMap() {
    // Coordenadas fixas de teste para a Ilha de Itaparica
    this.viewOnMap.emit({ lat: -12.992387, lng: -38.664135 });
  }
}
