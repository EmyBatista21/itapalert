// src/app/services/alert.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private mockAlerts: Alert[] = [
    // Dados de exemplo, você irá substituir pela chamada à sua API
    {
      id: 1,
      title: 'Buraco na Rua Principal',
      description: 'Grande buraco causando problemas no trânsito.',
      type: 'Buraco',
      status: 'Aberto',
      neighborhood: 'Centro',
      latitude: -22.90, // Exemplo de Coordenadas
      longitude: -43.20,
      iconClass: 'icon-danger' // Cor vermelha
    },
    {
      id: 2,
      title: 'Poste com lâmpada queimada',
      description: 'Falta de iluminação na praça à noite.',
      type: 'Iluminação',
      status: 'Em Andamento',
      neighborhood: 'Jardim',
      latitude: -22.91,
      longitude: -43.21,
      iconClass: 'icon-warning' // Cor amarela
    },
    {
      id: 3,
      title: 'Acúmulo de lixo',
      description: 'Lixo não recolhido há dias na esquina.',
      type: 'Lixo',
      status: 'Aberto',
      neighborhood: 'Porto',
      latitude: -22.89,
      longitude: -43.19,
      iconClass: 'icon-success' // Cor verde
    },
    // Adicionar mais alertas...
  ];

  constructor() { }

  // Retorna todos os alertas
  getAllAlerts(): Observable<Alert[]> {
    // Simula o tempo de resposta de uma API
    return of(this.mockAlerts);
  }

  // Lógica para obter alertas com base em filtros (bairro, tipo, status)
  getFilteredAlerts(filters: any): Observable<Alert[]> {
    // Implemente a lógica de filtragem aqui
    console.log('Aplicando filtros:', filters);
    let filtered = this.mockAlerts;

    if (filters.neighborhood) {
      filtered = filtered.filter(a => a.neighborhood === filters.neighborhood);
    }
    // ... adicione filtros para tipo e status

    return of(filtered);
  }
}