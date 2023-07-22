import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData = {
    user: '',
    password: ''
  };

  loginError = false; // Variável para controlar o estado de erro de login


  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  onSubmit() {
    const { user, password } = this.formData; // Use 'user' em vez de 'username' para corresponder ao objeto esperado pelo backend.

    this.authService.login(user, password)
    .then(response => {
      if (response.status === true) {
        // Redirecionar para a página inicial (home) após o login bem-sucedido
        localStorage.setItem('username', response.data[0].username); // Salvar o nome do usuário no localStorage
        localStorage.setItem('user_group', response.data[0].user_group);
        localStorage.setItem('active', response.data[0].active);
        localStorage.setItem('avatar', response.data[0].avatar);
        localStorage.setItem('id_instructor', response.data[0].id_instructor);
        this.router.navigate(['/home']);
      } else {
        console.error('Credenciais inválidas. Login falhou.'); // Tratar mensagem de erro da API
        this.loginError = true;
      }
    })
    .catch(error => {
      console.error('Erro de login:', error);
    });
  }
}
