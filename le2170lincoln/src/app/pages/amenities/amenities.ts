import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Language } from '../../services/language';

@Component({
  selector: 'app-amenities',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, CommonModule, RouterLink],
  templateUrl: './amenities.html',
  styleUrl: './amenities.scss'
})
export class AmenitiesComponent {
  constructor(public language: Language) {}
  
  amenities = [
    {
      icon: 'fitness_center',
      titleEn: 'Fitness Center',
      titleFr: 'Centre de Fitness',
      descEn: 'State-of-the-art gym with cardio and weight training equipment available 24/7',
      descFr: 'Salle de sport équipée d\'appareils cardio et de musculation disponible 24h/24 et 7j/7',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop',
      features: ['Cardio Equipment', 'Weight Training', 'Yoga Mats', 'Open 24/7']
    },
    {
      icon: 'deck',
      titleEn: 'Rooftop Terrace',
      titleFr: 'Terrasse sur le Toit',
      descEn: 'Beautiful rooftop terrace with panoramic city views, perfect for relaxation and social gatherings',
      descFr: 'Belle terrasse sur le toit avec vue panoramique sur la ville, parfaite pour la détente et les rassemblements sociaux',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop',
      features: ['City Views', 'BBQ Area', 'Seating', 'Event Space']
    },
    {
      icon: 'local_laundry_service',
      titleEn: 'Laundry Room',
      titleFr: 'Salle de Buanderie',
      descEn: 'Modern laundry facilities with multiple washers and dryers for your convenience',
      descFr: 'Installations de buanderie modernes avec plusieurs laveuses et sécheuses pour votre commodité',
      image: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop',
      features: ['Multiple Machines', 'Clean Facility', 'Card Payment', 'Always Available']
    },
    {
      icon: 'lock',
      titleEn: 'Secure Access',
      titleFr: 'Accès Sécurisé',
      descEn: '24/7 security with controlled building access, intercom system, and surveillance cameras',
      descFr: 'Sécurité 24h/24 avec accès contrôlé au bâtiment, système d\'interphone et caméras de surveillance',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop',
      features: ['Key Fob Access', 'Video Intercom', 'Security Cameras', '24/7 Monitoring']
    },
    {
      icon: 'wifi',
      titleEn: 'High-Speed Internet',
      titleFr: 'Internet Haute Vitesse',
      descEn: 'Fiber optic internet connectivity available in all units for seamless streaming and work',
      descFr: 'Connectivité Internet par fibre optique disponible dans toutes les unités pour le streaming et le travail',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
      features: ['Fiber Optic', 'High Speed', 'Reliable', 'Multiple Providers']
    },
    {
      icon: 'directions_bike',
      titleEn: 'Bike Storage',
      titleFr: 'Rangement pour Vélos',
      descEn: 'Secure indoor bike storage room for residents who prefer eco-friendly transportation',
      descFr: 'Salle de rangement sécurisée pour vélos intérieure pour les résidents qui préfèrent le transport écologique',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&auto=format&fit=crop',
      features: ['Indoor Storage', 'Secure', 'Easy Access', 'Bike Repair Station']
    },
    {
      icon: 'inbox',
      titleEn: 'Parcel Lockers',
      titleFr: 'Casiers à Colis',
      descEn: 'Convenient 24/7 parcel locker system for secure package delivery and pickup',
      descFr: 'Système de casiers à colis disponible 24h/24 pour la livraison et le ramassage sécurisés',
      image: 'https://images.unsplash.com/photo-1566207462855-dbc5c5ae5e48?w=800&auto=format&fit=crop',
      features: ['24/7 Access', 'Secure', 'Email Notifications', 'Multiple Sizes']
    },
    {
      icon: 'pets',
      titleEn: 'Pet Friendly',
      titleFr: 'Animaux Acceptés',
      descEn: 'We welcome your furry friends! Pet-friendly building with nearby parks',
      descFr: 'Nous accueillons vos amis à quatre pattes! Immeuble acceptant les animaux avec parcs à proximité',
      image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&auto=format&fit=crop',
      features: ['Dogs & Cats Welcome', 'Nearby Parks', 'Pet Deposit', 'Size Restrictions']
    },
    {
      icon: 'ac_unit',
      titleEn: 'Climate Control',
      titleFr: 'Climatisation',
      descEn: 'Individual climate control in each unit for year-round comfort',
      descFr: 'Contrôle climatique individuel dans chaque unité pour un confort toute l\'année',
      image: 'https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&auto=format&fit=crop',
      features: ['Heating', 'Air Conditioning', 'Individual Control', 'Energy Efficient']
    },
    {
      icon: 'local_parking',
      titleEn: 'Parking Available',
      titleFr: 'Stationnement Disponible',
      descEn: 'Indoor and outdoor parking spaces available for rent',
      descFr: 'Espaces de stationnement intérieur et extérieur disponibles à la location',
      image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format&fit=crop',
      features: ['Indoor Parking', 'Outdoor Spaces', 'Monthly Rental', 'Visitor Parking']
    },
    {
      icon: 'recycling',
      titleEn: 'Recycling Program',
      titleFr: 'Programme de Recyclage',
      descEn: 'Comprehensive recycling and composting program for environmentally conscious living',
      descFr: 'Programme complet de recyclage et de compostage pour une vie écoresponsable',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop',
      features: ['Recycling Bins', 'Composting', 'Eco-Friendly', 'Easy Access']
    },
    {
      icon: 'store',
      titleEn: 'Nearby Amenities',
      titleFr: 'Commodités à Proximité',
      descEn: 'Walking distance to grocery stores, restaurants, cafes, and shopping centers',
      descFr: 'Distance de marche des épiceries, restaurants, cafés et centres commerciaux',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop',
      features: ['Grocery Stores', 'Restaurants', 'Cafes', 'Shopping']
    }
  ];
}
