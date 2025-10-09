import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alert } from '../../models/alert'; // importa seu modelo

@Component({
  imports: [CommonModule],
  selector: 'app-alerts-item-component',
  templateUrl: './alerts-item-component.html',
  styleUrls: ['./alerts-item-component.css']
})
export class AlertsItemComponent {
  @Input() alert!: Alert; // tipo forte
  @Output() viewOnMap = new EventEmitter<Alert>(); // envia o alerta completo

  onViewOnMap() {
    if (this.alert.lat != null && this.alert.lng != null) {
      this.viewOnMap.emit(this.alert); // envia o alerta completo
    } else {
      console.warn('Alerta sem coordenadas:', this.alert);
      alert('Este alerta não possui coordenadas válidas.');
    }
  }
}
