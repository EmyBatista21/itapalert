import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alert } from '../../models/alert';
import { CommonModule } from '@angular/common'; // <-- 1. Importar CommonModule

@Component({
  selector: 'app-alerts-item-component',
  imports: [CommonModule],
  templateUrl: './alerts-item-component.html',
  styleUrl: './alerts-item-component.css'
})
export class AlertsItemComponent {
    @Input() alert!: Alert;
  // O Output permite que o componente pai reaja ao clique do botão
  @Output() viewOnMap = new EventEmitter<Alert>();
}
