import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alert } from '../../models/alert';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-alerts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-alerts.html',
  styleUrls: ['./manage-alerts.css'],
})
export class ManageAlertsComponent implements OnInit {
  alerts: Alert[] = [];
  statusOptions: string[] = ['Aberto', 'Em andamento', 'Resolvido'];

  ngOnInit(): void {
    this.loadAlerts();
  }

  /** 🔄 Carrega os alertas do localStorage */
  loadAlerts(): void {
    const storedAlerts = localStorage.getItem('alerts');
    this.alerts = storedAlerts ? JSON.parse(storedAlerts) : [];
  }

  /** 💾 Atualiza o status de um alerta e salva no localStorage */
  updateStatus(alert: Alert, newStatus: string): void {
    alert.status = newStatus as 'Aberto';

    // Atualiza no localStorage
    localStorage.setItem('alerts', JSON.stringify(this.alerts));

    // Feedback visual opcional
    alert.iconClass = 'updated'; // pode usar isso pra mudar cor no CSS
  }

  /** 🗑️ Remover um alerta (opcional) */
  deleteAlert(id: number): void {
    this.alerts = this.alerts.filter(a => a.id !== id);
    localStorage.setItem('alerts', JSON.stringify(this.alerts));
  }
}
