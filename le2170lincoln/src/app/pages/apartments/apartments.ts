import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apartments',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, CommonModule, RouterLink],
  templateUrl: './apartments.html',
  styleUrl: './apartments.scss'
})
export class ApartmentsComponent {
  currentLanguage = signal('fr');
  
  apartments = [
    {
      id: 1,
      type: '1BR',
      size: '650',
      rent: '1352',
      available: true,
      features: ['Balcon', 'Rénové', 'Climatisation']
    },
    {
      id: 2,
      type: '2BR',
      size: '900',
      rent: '1752',
      available: true,
      features: ['2 Salles de bain', 'Balcon', 'Lave-vaisselle']
    },
    {
      id: 3,
      type: 'Studio',
      size: '450',
      rent: '1052',
      available: false,
      features: ['Compact', 'Rénové', 'Parfait pour étudiants']
    }
  ];
}
