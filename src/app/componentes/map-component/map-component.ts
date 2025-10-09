import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule],
  templateUrl: './map-component.html',
  styleUrls: ['./map-component.css']
})
export class MapComponent {
  zoom = 14;
  center: google.maps.LatLngLiteral = { lat: -12.8889, lng: -38.6796 }; // Ilha de Itaparica

  @Input() set location(coords: { lat: number; lng: number } | null) {
    if (coords) {
      this.center = coords;
    }
  }

  options: google.maps.MapOptions = {
    disableDefaultUI: false,
    fullscreenControl: true,
  };
}
