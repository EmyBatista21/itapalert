// src/app/pages/cadastro-alertas/cadastro-alertas.component.ts
import { Component } from '@angular/core';
import { AlertService } from '../../service/alert-service';
import { Alert } from '../../models/alert';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-alertas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-alertas.html',
  styleUrls: ['./cadastro-alertas.css']
})
export class CadastroAlertas {
  newAlert: Alert = {
  id: 0,
  title: '',
  description: '',
  type: '', 
  neighborhood: '',
  location: '',
  status: 'Aberto',
  iconClass: 'alert-red'
};


  constructor(private alertService: AlertService) { }

  onSubmit(form: any) {
  if (form.valid) {
    this.newAlert.id = Date.now();
    this.alertService.addAlert(this.newAlert);
    alert('Alerta cadastrado com sucesso!');

    // Reset do form e do model
    form.resetForm({
      type: 'Roubo',
      status: 'Aberto',
      iconClass: 'alert-red'
    });
  } else {
    alert('Por favor, preencha todos os campos corretamente.');
  }
}
}
