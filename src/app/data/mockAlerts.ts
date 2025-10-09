// src/app/data/mock-alerts.ts
import { Alert } from "../models/alert";


export const MOCK_ALERTS: Alert[] = [
  {
    id: 1,
    title: 'Buraco grande em via principal',
    description: 'Há um buraco profundo atrapalhando o tráfego na rua principal do bairro Mar Grande.',
    type: 'Buraco em via pública',
    location: 'Mar Grande',
    status: 'Aberto',
    lat: -12.9951,
    lng: -38.6195
  },
  {
    id: 2,
    title: 'Poste sem iluminação',
    description: 'A rua está completamente escura devido a poste queimado.',
    type: 'Falta de iluminação pública',
    location: 'Barra Grande',
    status: 'Aberto',
    lat: -13.0042,
    lng: -38.6189
  },
  {
    id: 3,
    title: 'Acúmulo de lixo próximo à praia',
    description: 'Grande quantidade de lixo acumulado próximo ao calçadão da praia.',
    type: 'Acúmulo de entulho',
    location: 'Cacha Pregos',
    status: 'Aberto',
    lat: -13.0863,
    lng: -38.6831
  },
  {
    id: 4,
    title: 'Calçada danificada em frente à escola',
    description: 'O piso da calçada está quebrado e causa risco aos pedestres.',
    type: 'Calçada danificada',
    location: 'Jiribatuba',
    status: 'Aberto',
    lat: -13.0457,
    lng: -38.6813
  },
  {
    id: 5,
    title: 'Foco de dengue em terreno baldio',
    description: 'Há água parada acumulada em terreno abandonado.',
    type: 'Água parada (foco de dengue)',
    location: 'Ilha de Itaparica',
    status: 'Aberto',
    lat: -12.9615,
    lng: -38.6211
  },
  {
    id: 6,
    title: 'Semáforo fora de funcionamento',
    description: 'O semáforo principal não está funcionando e causa confusão no trânsito.',
    type: 'Semáforo quebrado',
    location: 'Mar Grande',
    status: 'Aberto',
    lat: -12.9962,
    lng: -38.6208
  },
  {
    id: 7,
    title: 'Esgoto vazando em via pública',
    description: 'Esgoto a céu aberto causando mau cheiro e riscos sanitários.',
    type: 'Esgoto a céu aberto',
    location: 'Ilhota',
    status: 'Aberto',
    lat: -13.0174,
    lng: -38.6623
  },
  {
    id: 8,
    title: 'Lixeira pública quebrada',
    description: 'As lixeiras da praça estão danificadas e sem tampa.',
    type: 'Lixeira pública danificada',
    location: 'Barra do Gil',
    status: 'Aberto',
    lat: -13.0131,
    lng: -38.6558
  },
  {
    id: 9,
    title: 'Desmatamento irregular em área verde',
    description: 'Moradores relatam corte ilegal de árvores em área preservada.',
    type: 'Desmatamento irregular',
    location: 'Conceição',
    status: 'Aberto',
    lat: -13.0354,
    lng: -38.6901
  },
  {
    id: 10,
    title: 'Praça abandonada com brinquedos quebrados',
    description: 'A praça do bairro está abandonada e brinquedos estão quebrados.',
    type: 'Brinquedo quebrado em parquinho',
    location: 'Berlinque',
    status: 'Aberto',
    lat: -13.0344,
    lng: -38.6657
  },
  {
    id: 11,
    title: 'Coleta de lixo irregular',
    description: 'O caminhão de coleta não passa há mais de uma semana.',
    type: 'Coleta de lixo irregular',
    location: 'Aratuba',
    status: 'Aberto',
    lat: -13.0815,
    lng: -38.6952
  },
  {
    id: 12,
    title: 'Erosão avançando sobre calçada',
    description: 'Erosão está comprometendo o acesso de pedestres.',
    type: 'Erosão',
    location: 'Cacha Pregos',
    status: 'Aberto',
    lat: -13.0872,
    lng: -38.6821
  },
  {
    id: 13,
    title: 'Ponto de ônibus sem abrigo',
    description: 'Os usuários ficam expostos ao sol e à chuva enquanto aguardam o transporte.',
    type: 'Ponto de ônibus sem abrigo',
    location: 'Mar Grande',
    status: 'Aberto',
    lat: -12.9985,
    lng: -38.6223
  },
  {
    id: 14,
    title: 'Poluição sonora em bar noturno',
    description: 'O som alto ultrapassa o horário permitido e incomoda moradores.',
    type: 'Poluição sonora',
    location: 'Barra Grande',
    status: 'Aberto',
    lat: -13.0048,
    lng: -38.6193
  },
  {
    id: 15,
    title: 'Queimada em terreno baldio',
    description: 'Moradores relatam fumaça constante devido a queima de lixo.',
    type: 'Queimada em terreno baldio',
    location: 'Aratuba',
    status: 'Aberto',
    lat: -13.0798,
    lng: -38.6912
  },
  {
    id: 16,
    title: 'Bueiro entupido causando alagamento',
    description: 'Após chuvas, rua fica alagada devido a bueiro entupido.',
    type: 'Bueiro entupido',
    location: 'Ilhota',
    status: 'Aberto',
    lat: -13.0167,
    lng: -38.6611
  },
  {
    id: 17,
    title: 'Sinalização de trânsito apagada',
    description: 'Faixas de pedestre estão apagadas e dificultam travessia.',
    type: 'Sinalização apagada',
    location: 'Jiribatuba',
    status: 'Aberto',
    lat: -13.0462,
    lng: -38.6824
  },
  {
    id: 18,
    title: 'Poste com risco de queda',
    description: 'Poste inclinado ameaçando cair sobre casas próximas.',
    type: 'Poste queimado',
    location: 'Berlinque',
    status: 'Aberto',
    lat: -13.0335,
    lng: -38.6668
  },
  {
    id: 19,
    title: 'Vazamento de água em rua principal',
    description: 'Água jorrando continuamente de cano estourado.',
    type: 'Vazamento de água',
    location: 'Mar Grande',
    status: 'Aberto',
    lat: -12.9977,
    lng: -38.6202
  },
  {
    id: 20,
    title: 'Praça sem manutenção',
    description: 'Gramado alto e bancos quebrados na praça do bairro.',
    type: 'Praça mal conservada',
    location: 'Barra do Gil',
    status: 'Aberto',
    lat: -13.0119,
    lng: -38.6543
  }
];
