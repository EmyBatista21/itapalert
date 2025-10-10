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
  pagedAlerts: Alert[] = [];
  statusOptions: string[] = ['Aberto', 'Em andamento', 'Resolvido'];

  // Paginação
  itemsPerPage = 8;
  currentPage = 1;
  totalPages = 1;

  ngOnInit(): void {
    this.loadAlerts();
  }

  /** 🔄 Carrega os alertas do localStorage */
  loadAlerts(): void {
    const storedAlerts = localStorage.getItem('alerts');
    this.alerts = storedAlerts ? JSON.parse(storedAlerts) : [];
    this.updatePagination();
  }

  /** 💾 Atualiza o status de um alerta e salva no localStorage */
  updateStatus(alert: Alert, newStatus: string): void {
    alert.status = newStatus as 'Aberto';
    localStorage.setItem('alerts', JSON.stringify(this.alerts));
  }

  /** 🗑️ Remover um alerta */
  deleteAlert(id: number): void {
    this.alerts = this.alerts.filter(a => a.id !== id);
    localStorage.setItem('alerts', JSON.stringify(this.alerts));
    this.updatePagination();
  }

  /** 🔢 Atualiza lista exibida conforme a página atual */
  updatePagination(): void {
    this.totalPages = Math.ceil(this.alerts.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedAlerts = this.alerts.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }
}
