import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],
})
export class Cadastro {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Dados de cadastro:', form.value);
    }
  }
}
