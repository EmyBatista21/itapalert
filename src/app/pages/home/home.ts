// src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { Alert } from '../../models/alert';
import { AlertService } from '../../service/alert-service';
import { MapComponent } from '../../componentes/map-component/map-component';
import { AlertsPanelComponent } from '../../componentes/alerts-panel-component/alerts-panel-component';


@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  imports: [MapComponent, AlertsPanelComponent]
})
export class Home implements OnInit {
  allAlerts: Alert[] = [];
  selectedAlertOnMap: Alert | null = null;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    // 🔹 Carrega todos os alertas para exibir no painel e no mapa
    this.alertService.getAllAlerts().subscribe(data => {
      this.allAlerts = data;
    });
  }

  // 🔹 Recebe o evento do painel quando o usuário clica em "Ver no mapa"
  onAlertSelected(alert: Alert): void {
    this.selectedAlertOnMap = alert;
  }
}
