import { Component } from '@angular/core';
import { InactivityService } from 'src/app/InactivityService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private inactivityService: InactivityService) {}
}
