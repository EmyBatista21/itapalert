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

  openLGPDModal(form: NgForm) {
    if (!form.valid) {
      alert('Preencha todos os campos obrigatórios antes de prosseguir.');
      return;
    }

    const { email, password, confirmPassword } = form.value;

    // Valida e-mail
    if (!this.isValidEmail(email)) {
      alert('Digite um e-mail válido.');
      return;
    }

    // Verifica se a senha e a confirmação coincidem
    if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    // Se tudo estiver correto, abre o modal LGPD
    this.showLGPD = true;
  }

  closeLGPDModal() {
    this.showLGPD = false;
    this.acceptedLGPD = false;
  }

  confirmLGPD(form: NgForm) {
    if (this.acceptedLGPD) {
      console.log('Dados de cadastro:', form.value);
      alert('Cadastro realizado com sucesso!');
      this.closeLGPDModal();
      form.resetForm();
    }
  }

  private isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}
