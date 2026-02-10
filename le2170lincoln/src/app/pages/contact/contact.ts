import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Language } from '../../services/language';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  constructor(public language: Language) {}
  
  // Map popup properties
  showMapPopup = false;
  mapPopupTimeout: any;
  
  contactForm = {
    name: '',
    email: '',
    phone: '',
    inquiry: 'general',
    message: ''
  };
  
  inquiryTypes = [
    { value: 'general', labelEn: 'General Inquiry', labelFr: 'Demande Générale' },
    { value: 'apartment', labelEn: 'Apartment Rental', labelFr: 'Location d\'Appartement' },
    { value: 'viewing', labelEn: 'Schedule Viewing', labelFr: 'Planifier une Visite' },
    { value: 'maintenance', labelEn: 'Maintenance Request', labelFr: 'Demande d\'Entretien' }
  ];
  
  contactInfo = {
    phone: '(514) 123-4567',
    email: 'rent@le2170lincoln.com',
    address: '2170 Lincoln Ave, Montreal, QC H3H 1M8',
    hours: {
      en: 'Mon-Fri 9am-5pm, Sat 10am-4pm, Sun closed',
      fr: 'Lun-Ven 9h-17h, Sam 10h-16h, Dim fermé'
    }
  };
  
  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Here you would typically send the form data to a backend service
    alert(this.language.currentLanguage()() === 'en' 
      ? 'Thank you for your message! We will contact you soon.' 
      : 'Merci pour votre message! Nous vous contacterons bientôt.');
  }
  
  showMapPopupWithDelay() {
    // Clear any existing timeout
    if (this.mapPopupTimeout) {
      clearTimeout(this.mapPopupTimeout);
    }
    
    // Show popup after a short delay
    this.mapPopupTimeout = setTimeout(() => {
      this.showMapPopup = true;
    }, 300);
  }
  
  hideMapPopupWithDelay() {
    // Clear any existing timeout
    if (this.mapPopupTimeout) {
      clearTimeout(this.mapPopupTimeout);
    }
    
    // Hide popup after a short delay
    this.mapPopupTimeout = setTimeout(() => {
      this.showMapPopup = false;
    }, 100);
  }
  
  keepMapPopupOpen() {
    // Clear any pending hide timeout when hovering over popup
    if (this.mapPopupTimeout) {
      clearTimeout(this.mapPopupTimeout);
    }
  }
}
