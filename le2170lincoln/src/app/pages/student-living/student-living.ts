import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Language } from '../../services/language';

@Component({
  selector: 'app-student-living',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, CommonModule, RouterLink],
  templateUrl: './student-living.html',
  styleUrl: './student-living.scss'
})
export class StudentLivingComponent {
  constructor(public language: Language) {}
  
  features = [
    {
      icon: 'school',
      titleEn: 'Close to Universities',
      titleFr: 'Proche des Universités',
      descEn: '5 minutes walk to McGill University and Concordia University',
      descFr: '5 minutes à pied de l\'Université McGill et de l\'Université Concordia'
    },
    {
      icon: 'directions_subway',
      titleEn: 'Public Transit Access',
      titleFr: 'Accès aux Transports',
      descEn: 'Metro stations and bus stops within walking distance',
      descFr: 'Stations de métro et arrêts de bus à distance de marche'
    },
    {
      icon: 'wifi',
      titleEn: 'High-Speed Internet',
      titleFr: 'Internet Haute Vitesse',
      descEn: 'Free high-speed WiFi included in all units',
      descFr: 'WiFi haute vitesse gratuit inclus dans toutes les unités'
    },
    {
      icon: 'local_laundry_service',
      titleEn: 'Laundry Facilities',
      titleFr: 'Buanderie',
      descEn: 'On-site laundry facilities available 24/7',
      descFr: 'Buanderie sur place disponible 24h/24 et 7j/7'
    },
    {
      icon: 'security',
      titleEn: 'Secure Building',
      titleFr: 'Immeuble Sécurisé',
      descEn: '24/7 security with controlled building access',
      descFr: 'Sécurité 24h/24 avec accès contrôlé au bâtiment'
    },
    {
      icon: 'menu_book',
      titleEn: 'Study Spaces',
      titleFr: 'Espaces d\'Etude',
      descEn: 'Quiet study areas and common rooms for group work',
      descFr: 'Espaces d\'etude calmes et salles communes pour travail de groupe'
    }
  ];
  
  campusLocations = [
    {
      name: 'McGill University',
      distance: '400m',
      walkTime: '5 min',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop'
    },
    {
      name: 'Concordia University',
      distance: '1.2km',
      walkTime: '15 min',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop'
    },
    {
      name: 'Downtown Montreal',
      distance: '500m',
      walkTime: '7 min',
      image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&auto=format&fit=crop'
    }
  ];
  
  studentAmenities = [
    {
      titleEn: 'Furnished Options',
      titleFr: 'Options Meublées',
      descEn: 'Fully furnished apartments available for international students',
      descFr: 'Appartements entièrement meublés disponibles pour étudiants internationaux',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop'
    },
    {
      titleEn: 'Study Lounge',
      titleFr: 'Salon d\'Etude',
      descEn: 'Dedicated quiet study spaces with desks and comfortable seating',
      descFr: 'Espaces d\'etude calmes dédiés avec bureaux et sièges confortables',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop'
    },
    {
      titleEn: 'Community Events',
      titleFr: 'Événements Communautaires',
      descEn: 'Regular social events to help students connect and make friends',
      descFr: 'Événements sociaux réguliers pour aider les étudiants à se connecter',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop'
    }
  ];
}
