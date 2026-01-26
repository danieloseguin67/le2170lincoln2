import { Component, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [MatIconModule, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class FooterComponent {
  currentLanguage = signal('fr');
  
  contactInfo = {
    phone: '(514) 123-4567',
    email: 'rent@le2170lincoln.com',
    address: '2170 Lincoln Ave, Montreal, QC H3H 1M8',
    hours: {
      en: 'Mon-Fri 9am-5pm, Sat 10am-4pm, Sun closed',
      fr: 'Lun-Ven 9h-17h, Sam 10h-16h, Dim fermé'
    }
  };
  
  socialMedia = [
    { name: 'Facebook', url: 'https://facebook.com/le2170lincoln', icon: 'facebook' },
    { name: 'Instagram', url: 'https://instagram.com/le2170lincoln', icon: 'instagram' },
    { name: 'Twitter', url: 'https://twitter.com/le2170lincoln', icon: 'twitter' }
  ];
}
