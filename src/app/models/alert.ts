// src/app/models/alert.ts
export interface Alert {
  id: number;
  title: string;
  description: string;

  // 🔹 Tipos de problemas comunitários (sem envolver violência ou tráfico)
  type:
    ''
    | 'Buraco em via pública'
    | 'Falta de pavimentação'
    | 'Calçada danificada'
    | 'Semáforo quebrado'
    | 'Sinalização apagada'
    | 'Erosão'
    | 'Alagamento'
    | 'Falta de iluminação pública'
    | 'Poste queimado'
    | 'Coleta de lixo irregular'
    | 'Acúmulo de entulho'
    | 'Lixeira pública danificada'
    | 'Esgoto a céu aberto'
    | 'Vazamento de água'
    | 'Bueiro entupido'
    | 'Desmatamento irregular'
    | 'Queimada em terreno baldio'
    | 'Praça mal conservada'
    | 'Brinquedo quebrado em parquinho'
    | 'Ponto de ônibus sem abrigo'
    | 'Água parada (foco de dengue)'
    | 'Outro';

  location: string; // Bairro ou local do alerta

  status: 'Aberto';

  iconClass?: string; // Opcional: ícone visual correspondente
  lat?: number;
  lng?: number;
}
