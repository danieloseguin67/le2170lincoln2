import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-amenities',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, RouterLink],
  templateUrl: './amenities.html',
  styleUrl: './amenities.scss'
})
export class AmenitiesComponent {
  currentLanguage = signal('fr');
}
