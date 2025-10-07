import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Alert } from '../../models/alert';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map-component.html',
  styleUrls: ['./map-component.css'],
})
export class MapComponent implements OnChanges {
  @Input() alerts: Alert[] = [];
  @Input() selectedAlert: Alert | null = null;

  mapUrl: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    // Atualiza a URL do mapa sempre que o alerta selecionado mudar
    if (changes['selectedAlert']) {
      if (this.selectedAlert) {
        const lat = (this.selectedAlert as any).latitude || 0;
        const lng = (this.selectedAlert as any).longitude || 0;
        this.mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${lat},${lng}&zoom=15&maptype=roadmap`;
      } else {
        // Local padrão quando nenhum alerta selecionado
        const defaultLat = -23.55052; // São Paulo exemplo
        const defaultLng = -46.633308;
        this.mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${defaultLat},${defaultLng}&zoom=12&maptype=roadmap`;
      }
    }
  }
}
