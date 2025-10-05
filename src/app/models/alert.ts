// src/app/models/alert.ts
export interface Alert {
  id: number;
  title: string;
  description: string;           // Nova
  type: '' | 'Lixo' | 'Poste Queimado' | 'Esgoto' | 'Buraco' | 'Iluminação' | 'Outro';
  neighborhood: string;           // Bairro
  location: string;               // Local do alerta
  status: 'Aberto';               // Sempre Aberto
  iconClass?: string;             // Opcional, para ícones visuais
}
