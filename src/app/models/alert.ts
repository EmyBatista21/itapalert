// src/app/models/alert.model.ts

export interface Alert {
  id: number;
  title: string;
  description: string;
  type: 'Buraco' | 'Iluminação' | 'Lixo' | 'Outro'; // Exemplos de tipos
  status: 'Aberto' | 'Em Andamento' | 'Resolvido';
  neighborhood: string; // Bairro
  latitude: number;
  longitude: number;
  iconClass: string; // Para o ícone visual na lista
}