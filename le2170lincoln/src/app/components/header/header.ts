import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  currentLanguage = signal('fr');
  
  menuItems = [
    { path: '/home', labelEn: 'Home', labelFr: 'Accueil' },
    { path: '/apartments', labelEn: 'Apartments', labelFr: 'Appartements' },
    { path: '/student-living', labelEn: 'Student Living', labelFr: 'Vie Étudiante' },
    { path: '/amenities', labelEn: 'Amenities', labelFr: 'Commodités' },
    { path: '/about', labelEn: 'About Us', labelFr: 'À Propos' },
    { path: '/contact', labelEn: 'Contact Us', labelFr: 'Nous Contacter' }
  ];
  
  switchLanguage(lang: string) {
    this.currentLanguage.set(lang);
  }
  
  getLabel(item: any): string {
    return this.currentLanguage() === 'en' ? item.labelEn : item.labelFr;
  }
}
