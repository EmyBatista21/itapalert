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
  isMenuOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  // 🟢 FUNÇÃO CRUCIAL: Alterna o estado do menu
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    // Fecha o menu após o logout
    this.isMenuOpen = false; 
  }
}