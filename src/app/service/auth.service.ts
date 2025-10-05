import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // começa como falso

  login(username: string, password: string): boolean {
    const allowedUsers = [
      { username: 'admin', password: '123456' }
    ];

    const user = allowedUsers.find(u => u.username === username && u.password === password);

    if (user) {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true'); // mantém login
      return true;
    }

    return false;
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    // Retorna true apenas se fez login
    return this.loggedIn || localStorage.getItem('loggedIn') === 'true';
  }
}
