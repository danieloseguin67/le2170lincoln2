import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  currentLanguage = signal('fr');
}
