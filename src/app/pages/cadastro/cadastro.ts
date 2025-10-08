import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
})
export class Cadastro {
  showLGPD = false;
  acceptedLGPD = false;

  // Abre o modal antes de enviar o cadastro
  openLGPDModal(form: NgForm) {
    if (form.valid) {
      this.showLGPD = true;
    } else {
      alert('Preencha todos os campos obrigatórios antes de prosseguir.');
    }
  }

  // Fecha o modal sem enviar
  closeLGPDModal() {
    this.showLGPD = false;
    this.acceptedLGPD = false;
  }

  // Confirma LGPD e envia o cadastro
  confirmLGPD(form: NgForm) {
    if (this.acceptedLGPD) {
      console.log('Dados de cadastro:', form.value);
      alert('Cadastro realizado com sucesso!');
      this.closeLGPDModal();
      form.resetForm();
    }
  }
}
