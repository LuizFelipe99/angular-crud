import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  
  get username(): string {
    return localStorage.getItem('username') || ''; // Obter o nome do usuário do localStorage
  }
  get user_group(): string {
    return localStorage.getItem('user_group') || ''; // Obter o nome do usuário do localStorage
  }
  get active(): string {
    return localStorage.getItem('active') || ''; // Obter o nome do usuário do localStorage
  }
  get avatar(): string {
    return localStorage.getItem('avatar') || ''; // Obter o nome do usuário do localStorage
  }
  get id_instructor(): string {
    return localStorage.getItem('id_instructor') || ''; // Obter o nome do usuário do localStorage
  }
  
  constructor(private router: Router) {}
  
  isMenuInvisible = false;
  openMenu(): void{
    this.isMenuInvisible = !this.isMenuInvisible;
  }

  logout(): void {
    localStorage.clear();
    // Redirecionar para a rota de login
    this.router.navigate(['/login']);
  }

}
