// src/app/data/mockAlerts.ts
import { Alert } from '../models/alert';

export const MOCK_ALERTS: Alert[] = [
  {
    id: 1,
    title: 'Acúmulo de entulho',
    description: 'Entulho deixado ao lado escola.',
    type: 'Acúmulo de entulho',
    location: 'Barra do Gil',
    status: 'Aberto',
    iconClass: 'alert-red',
    lat: -12.992673, 
    lng: -38.636963
  },
  {
    id: 2,
    title: 'Calçada quebrada',
    description: 'Pedestres estão se arriscando ao atravessar a rua.',
    type: 'Calçada danificada',
    location: 'Coroa',
    status: 'Aberto',
    iconClass: 'alert-orange',
    lat: -13.000226, 
    lng: -38.641539
  },
  {
    id: 3,
    title: 'Semáforo apagado',
    description: 'Semáforo do cruzamento principal está apagado há dias.',
    type: 'Semáforo quebrado',
    location: 'Baiacú',
    status: 'Aberto',
    iconClass: 'alert-yellow',
    lat: -12.995479, 
    lng: -38.698850
  },
  {
    id: 4,
    title: 'Acúmulo de entulho',
    description: 'Entulho deixado em terreno baldio próximo à praça.',
    type: 'Acúmulo de entulho',
    location: 'Barra Grande',
    status: 'Aberto',
    iconClass: 'alert-orange',
    lat: -13.040959, 
    lng: -38.683553
  },
  {
    id: 5,
    title: 'Poste queimado',
    description: 'Poste de iluminação pública queimado, deixando a rua escura.',
    type: 'Poste queimado',
    location: 'Barra do Gil',
    status: 'Aberto',
    iconClass: 'alert-red',
    lat: -12.993117, 
    lng: -38.638478
  },
  {
    id: 6,
    title: 'Alagamento após chuva',
    description: 'Rua alagada dificultando a passagem de veículos e pedestres.',
    type: 'Alagamento',
    location: 'Mar Grande',
    status: 'Aberto',
    iconClass: 'alert-blue',
    lat: -12.959692, 
    lng: -38.606530
  },
  {
    id: 7,
    title: 'Lixeira pública danificada',
    description: 'Lixeira quebrada acumulando lixo espalhado pelo bairro.',
    type: 'Lixeira pública danificada',
    location: 'Ilhota',
    status: 'Aberto',
    iconClass: 'alert-orange',
    lat: -12.966416, 
    lng: -38.614822
  },
  {
    id: 8,
    title: 'Praça mal conservada',
    description: 'Praça sem manutenção, bancos quebrados e gramado alto.',
    type: 'Praça mal conservada',
    location: 'Gamboa',
    status: 'Aberto',
    iconClass: 'alert-yellow',
    lat: -12.974051, 
    lng: -38.614791
  },
  {
    id: 9,
    title: 'Falta de iluminação pública',
    description: 'Rua completamente escura à noite, perigosa para pedestres.',
    type: 'Falta de iluminação pública',
    location: 'Taipoca',
    status: 'Aberto',
    iconClass: 'alert-red',
    lat: -12.997843, 
    lng: -38.639767
  },
  {
    id: 10,
    title: 'Poluição Sonora',
    description: 'Todo domingo fazer paredão após às 22h',
    type: 'Outro',
    location: 'Mar Grande',
    status: 'Aberto',
    iconClass: 'alert-gray',
    lat: -12.953303, 
    lng: -38.611124
  }
];
