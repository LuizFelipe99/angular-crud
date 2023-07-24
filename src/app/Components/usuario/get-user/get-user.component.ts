import { Component } from '@angular/core';
import { InactivityService } from 'src/app/InactivityService';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {
  users: any[]; // Certifique-se de que dadosDaApi está inicializado
  total_users: 0;


  constructor(
    private inactivityService: InactivityService,
    private authService: AuthService
    ) {
      this.users = [];
      this.total_users = 0;
    }

    // função para quando iniciar o componente ja carregar os dados
    ngOnInit(): void {
      this.getUsers();
    }

     getUsers() {
       this.authService.getUsers()
       .then(response => {
         this.users = response.data;
         console.log(this.users);
       })
       .catch(error => {
         console.error('Erro de login:', error);
       });
    }
}
