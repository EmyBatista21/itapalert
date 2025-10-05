import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  standalone: true, // Assumindo que você usa Standalone Components
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html', // Renomeado para seguir convenção
  styleUrl: './header.css'    // Renomeado para seguir convenção
})
export class Header {
  // Variável para controlar o estado do menu mobile
  isMenuOpen: boolean = false; 

  // Função para alternar o estado (abre/fecha)
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(private auth: AuthService, private router: Router) {}
  logout() {
    this.auth.logout();          // limpa sessão
    this.router.navigate(['/login']); // manda pra login
  }
}