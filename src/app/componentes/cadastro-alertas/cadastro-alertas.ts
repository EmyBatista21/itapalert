import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AlertService } from '../../service/alert-service';
import { Alert } from '../../models/alert';
import { MOCK_ALERTS } from '../../data/mockAlerts';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-cadastro-alertas',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSelectModule],
  templateUrl: './cadastro-alertas.html',
  styleUrls: ['./cadastro-alertas.css']
})
export class CadastroAlertas implements AfterViewInit {
  @ViewChild('locationInput') locationInput!: ElementRef;

  newAlert: Alert = {
    id: 0,
    title: '',
    description: '',
    type: '',
    location: '',
    status: 'Aberto',
    iconClass: 'alert-red',
    lat: -12.991415,
    lng: -38.659188
  };

  alertTypes: string[] = [
    'Buraco em via pública',
    'Falta de pavimentação',
    'Calçada danificada',
    'Semáforo quebrado',
    'Sinalização apagada',
    'Erosão',
    'Alagamento',
    'Falta de iluminação pública',
    'Poste queimado',
    'Coleta de lixo irregular',
    'Acúmulo de entulho',
    'Lixeira pública danificada',
    'Esgoto a céu aberto',
    'Vazamento de água',
    'Bueiro entupido',
    'Desmatamento irregular',
    'Queimada em terreno baldio',
    'Praça mal conservada',
    'Brinquedo quebrado em parquinho',
    'Ponto de ônibus sem abrigo',
    'Água parada (foco de dengue)',
    'Outro'
  ];

  // 🔸 Controle do modal
  showModal = false;
  modalMessage = '';

  constructor(private alertService: AlertService) {
    this.sortAlertTypes();
  }

  sortAlertTypes() {
    this.alertTypes = this.alertTypes.filter(t => t !== '').sort((a, b) => a.localeCompare(b));
  }

  ngAfterViewInit(): void {
    // Espera até a API do Google estar pronta
    if (window['google'] && google.maps && google.maps.places) {
      this.initAutocomplete();
    } else {
      const interval = setInterval(() => {
        if (window['google'] && google.maps && google.maps.places) {
          clearInterval(interval);
          this.initAutocomplete();
        }
      }, 100);
    }
  }

  initAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.locationInput.nativeElement,
      {
        types: ['(regions)'],
        componentRestrictions: { country: 'BR' }
      }
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        this.newAlert.lat = place.geometry.location.lat();
        this.newAlert.lng = place.geometry.location.lng();
        this.newAlert.location = place.name || place.formatted_address || '';
      } else {
        this.newAlert.lat = -12.991415;
        this.newAlert.lng = -38.659188;
        this.newAlert.location = '';
        this.showCustomModal('Selecione um bairro válido da lista de sugestões.');
      }
    });
  }

  // 🔸 Exibe o modal customizado
  showCustomModal(message: string) {
    this.modalMessage = message;
    this.showModal = true;
  }

  // 🔸 Fecha o modal
  closeModal() {
    this.showModal = false;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.newAlert.id = Date.now();
      this.alertService.addAlert(this.newAlert);
      this.showCustomModal('Alerta cadastrado com sucesso!');

      form.resetForm({
        type: 'Acúmulo de entulho',
        status: 'Aberto',
        iconClass: 'alert-red',
        location: ''
      });

      this.newAlert.lat = -12.991415;
      this.newAlert.lng = -38.659188;
    } else {
      this.showCustomModal('Por favor, preencha todos os campos corretamente.');
    }

    this.insertMockAlerts();
  }

  insertMockAlerts() {
    const existingAlerts = JSON.parse(localStorage.getItem('alerts') || '[]');
    const updatedAlerts = [...existingAlerts, ...MOCK_ALERTS];
    localStorage.setItem('alerts', JSON.stringify(updatedAlerts));
  }
}
