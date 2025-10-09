import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AlertService } from '../../service/alert-service';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-cadastro-alertas',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    lat: 0,
    lng: 0
  };

  alertTypes: string[] = [
    'Água acumulada',
    'Animal abandonado',
    'Barulho excessivo',
    'Buraco',
    'Entulho',
    'Lixo',
    'Esgoto',
    'Iluminação',
    'Poste Queimado',
    'Terreno abandonado',
    'Outro'
  ];

  constructor(private alertService: AlertService) {}

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
        types: ['(regions)'], // bairros/regiões
        componentRestrictions: { country: 'BR' } // só Brasil
      }
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        this.newAlert.lat = place.geometry.location.lat();
        this.newAlert.lng = place.geometry.location.lng();
        this.newAlert.location = place.name || place.formatted_address || '';
      } else {
        this.newAlert.lat = 0;
        this.newAlert.lng = 0;
        this.newAlert.location = '';
        alert('Selecione um bairro válido da lista de sugestões.');
      }
    });
  }

  onSubmit(form: NgForm) {
    if (!this.newAlert.lat || !this.newAlert.lng) {
      alert('Por favor, selecione um bairro válido da lista de sugestões.');
      return;
    }

    if (form.valid) {
      this.newAlert.id = Date.now();
      this.alertService.addAlert(this.newAlert);
      alert('Alerta cadastrado com sucesso!');

      form.resetForm({
        type: '',
        status: 'Aberto',
        iconClass: 'alert-red',
        location: ''
      });

      this.newAlert.lat = 0;
      this.newAlert.lng = 0;
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
