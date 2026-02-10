import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Language } from '../../services/language';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  constructor(public language: Language) {}
  
  historyTimeline = [
    {
      year: '1960s',
      titleEn: 'The Beginning',
      titleFr: 'Le Début',
      descEn: 'The building was originally constructed as part of Montreal\'s post-war housing boom, designed to accommodate the growing population near McGill University.',
      descFr: 'L\'immeuble a été construit dans le cadre du boom immobilier d\'après-guerre de Montréal, conçu pour accueillir la population croissante près de l\'Université McGill.'
    },
    {
      year: '1990s',
      titleEn: 'Renovation Era',
      titleFr: 'Ère de Rénovation',
      descEn: 'Major renovations transformed the building with modern amenities while preserving its classic architectural charm.',
      descFr: 'Des rénovations majeures ont transformé l\'immeuble avec des commodités modernes tout en préservant son charme architectural classique.'
    },
    {
      year: '2020s',
      titleEn: 'Modern Living',
      titleFr: 'Vie Moderne',
      descEn: 'Today, Le 2170 Lincoln stands as a premier student and professional housing destination, combining historic character with contemporary comfort.',
      descFr: 'Aujourd\'hui, Le 2170 Lincoln se présente comme une destination de logement de premier choix pour les étudiants et professionnels, alliant caractère historique et confort contemporain.'
    }
  ];
  
  neighborhoodFeatures = [
    {
      icon: 'school',
      titleEn: 'University District',
      titleFr: 'Quartier Universitaire',
      descEn: 'Located in the heart of Montreal\'s prestigious university district, steps from McGill and Concordia.',
      descFr: 'Situé au cœur du prestigieux quartier universitaire de Montréal, à quelques pas de McGill et Concordia.'
    },
    {
      icon: 'store',
      titleEn: 'Shopping & Dining',
      titleFr: 'Boutiques & Restaurants',
      descEn: 'Surrounded by diverse restaurants, cafes, and boutique shops along Sainte-Catherine Street.',
      descFr: 'Entouré de restaurants variés, cafés et boutiques le long de la rue Sainte-Catherine.'
    },
    {
      icon: 'directions_subway',
      titleEn: 'Transit Hub',
      titleFr: 'Centre de Transport',
      descEn: 'Excellent public transportation access with multiple metro stations and bus routes nearby.',
      descFr: 'Excellent accès aux transports en commun avec plusieurs stations de métro et lignes d\'autobus à proximité.'
    },
    {
      icon: 'park',
      titleEn: 'Green Spaces',
      titleFr: 'Espaces Verts',
      descEn: 'Close to Mount Royal Park and other green spaces perfect for outdoor activities.',
      descFr: 'Proche du parc du Mont-Royal et d\'autres espaces verts parfaits pour les activités de plein air.'
    },
    {
      icon: 'nightlife',
      titleEn: 'Vibrant Culture',
      titleFr: 'Culture Vibrante',
      descEn: 'In the midst of Montreal\'s vibrant cultural scene with theaters, galleries, and music venues.',
      descFr: 'Au milieu de la scène culturelle vibrante de Montréal avec théâtres, galeries et salles de spectacles.'
    },
    {
      icon: 'local_hospital',
      titleEn: 'Healthcare Access',
      titleFr: 'Accès aux Soins',
      descEn: 'Near major hospitals and medical facilities including McGill University Health Centre.',
      descFr: 'Près des grands hôpitaux et centres médicaux incluant le Centre universitaire de santé McGill.'
    }
  ];
  
  values = [
    {
      icon: 'verified',
      titleEn: 'Quality Living',
      titleFr: 'Qualité de Vie',
      descEn: 'We are committed to providing well-maintained, comfortable living spaces that meet the highest standards.',
      descFr: 'Nous nous engageons à fournir des espaces de vie bien entretenus et confortables qui répondent aux normes les plus élevées.'
    },
    {
      icon: 'support_agent',
      titleEn: 'Responsive Management',
      titleFr: 'Gestion Réactive',
      descEn: 'Our dedicated management team is always available to address your concerns and maintenance needs.',
      descFr: 'Notre équipe de gestion dévouée est toujours disponible pour répondre à vos préoccupations et besoins d\'entretien.'
    },
    {
      icon: 'diversity_3',
      titleEn: 'Community Focus',
      titleFr: 'Focus Communautaire',
      descEn: 'We foster a welcoming, diverse community where residents feel at home and connected.',
      descFr: 'Nous favorisons une communauté accueillante et diversifiée où les résidents se sentent chez eux et connectés.'
    },
    {
      icon: 'eco',
      titleEn: 'Sustainability',
      titleFr: 'Durabilité',
      descEn: 'We implement eco-friendly practices and energy-efficient solutions for a sustainable future.',
      descFr: 'Nous mettons en œuvre des pratiques écologiques et des solutions énergétiques pour un avenir durable.'
    }
  ];
}
