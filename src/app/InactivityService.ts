import { Injectable, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InactivityService {
  private inactivityTime = 6000; // 10 minutos
  private interval: any;

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:keypress', ['$event'])
  onActivity(event: MouseEvent) {
    this.resetTimer();
  }

  constructor(
    private router: Router
  ) { this.resetTimer();}

  private resetTimer() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      // Chame a função para limpar o localStorage aqui
      localStorage.clear();
      this.router.navigate(['/login']);
      console.log('LocalStorage limpo após 10 minutos de inatividade.');
    }, this.inactivityTime);
  }
}
