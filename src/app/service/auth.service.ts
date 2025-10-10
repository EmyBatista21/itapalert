import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false; // começa como falso

  login(username: string, password: string): boolean {
    const allowedUsers = [
      { username: 'admin', password: '123456' },
      { username: 'user', password: 'senha' }
    ];

    const user = allowedUsers.find(u => u.username === username && u.password === password);

    if (user) {
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true'); // mantém login
      localStorage.setItem('username', username); // guarda o usuário logado
      return true;
    }

    return false;
  }

  logout() {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {
    return this.loggedIn || localStorage.getItem('loggedIn') === 'true';
  }

  isAdmin(): boolean {
    const username = localStorage.getItem('username');
    return this.isLoggedIn() && username === 'admin';
  }
}
