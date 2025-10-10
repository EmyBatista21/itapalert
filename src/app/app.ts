import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer';
import { NgIf } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, GoogleMapsModule, MatSelectModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('itapalert');

  currentUrl = signal(''); // inicialização segura

}
