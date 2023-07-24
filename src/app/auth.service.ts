import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //metodo para verificar se tem algo na storage username
  isAuthenticated(): boolean {
    const username = localStorage.getItem('username');
    return !!username;
  }
  
  private API_URL = 'https://gym-dev.com/back-end-academia/API'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  // função Login
  login(username: string, password: string): Promise<any> {
    const loginData = { user: username, password }; // Criar objeto com os dados de login

    const loginEndpoint = `${this.API_URL}/login.php`; // Substitua pelo endpoint da API de login

    return this.http.post(loginEndpoint, loginData).toPromise()
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

  // criando metodo para buscar todos usuarios
  getUsers(): Promise<any> {
    const endPoint = `${this.API_URL}/user/get-users.php`;
    return this.http.post(endPoint, '').toPromise()
      .then(response => {
        return response;
      })
      .catch(error => {
        return Promise.reject(error);
      });
  }

}
