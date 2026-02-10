import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { UnsplashService } from '../../services/unsplash.service';
import { Language } from '../../services/language';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule, CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private sanitizer: DomSanitizer,
    private unsplash: UnsplashService,
    public language: Language
  ) {}
    apartmentWebImages: string[] = [];
  
  showSpecialOffer = false;
  
  // Carousel properties
  currentSlide = 0;
  carouselInterval: any;
  
  // Lifestyle carousel properties
  currentLifestyleSlide = 0;
  lifestyleCarouselInterval: any;
  
  // Map popup properties
  showMapPopup = false;
  mapPopupTimeout: any;
  
  contactFormData = {
    name: '',
    email: '',
    phone: '',
    bedrooms: ''
  };
  
  apartmentRooms = [
    {
      icon: 'bed',
      titleEn: 'Bedroom',
      titleFr: 'Chambre à Coucher',
      descEn: 'Spacious bedrooms with natural light',
      descFr: 'Chambres spacieuses avec lumière naturelle'
    },
    {
      icon: 'kitchen',
      titleEn: 'Kitchen',
      titleFr: 'Cuisine',
      descEn: 'Modern kitchen with premium appliances',
      descFr: 'Cuisine moderne avec électroménagers haut de gamme'
    },
    {
      icon: 'weekend',
      titleEn: 'Living Room',
      titleFr: 'Salon',
      descEn: 'Comfortable living space for relaxation',
      descFr: 'Espace de vie confortable pour se détendre'
    },
    {
      icon: 'bathtub',
      titleEn: 'Bathroom',
      titleFr: 'Salle de Bain',
      descEn: 'Elegant bathrooms with modern fixtures',
      descFr: 'Salles de bain élégantes avec installations modernes'
    },
    {
      icon: 'balcony',
      titleEn: 'Balcony',
      titleFr: 'Balcon',
      descEn: 'Private balcony with city views',
      descFr: 'Balcon privé avec vues sur la ville'
    }
  ];
  
  carouselImages = [
    {
      filename: 'carouselimg1.avi',
      titleEn: 'Modern Living Room',
      titleFr: 'Salon Moderne',
      descEn: 'Spacious living room with contemporary furniture and natural light',
      descFr: 'Salon spacieux avec mobilier contemporain et lumière naturelle'
    },
    {
      filename: 'carouselimg2.avi',
      titleEn: 'Stylish Bedroom',
      titleFr: 'Chambre Élégante',
      descEn: 'Comfortable bedroom with modern amenities and cozy atmosphere',
      descFr: 'Chambre confortable avec commodités modernes et atmosphère chaleureuse'
    },
    {
      filename: 'carouselimg3.avi',
      titleEn: 'Modern Kitchen',
      titleFr: 'Cuisine Moderne',
      descEn: 'Fully equipped kitchen with premium appliances and granite countertops',
      descFr: 'Cuisine entièrement équipée avec électroménagers haut de gamme et comptoirs en granit'
    },
    {
      filename: 'carouselimg4.avi',
      titleEn: 'Elegant Bathroom',
      titleFr: 'Salle de Bain Élégante',
      descEn: 'Luxurious bathroom with modern fixtures and spa-like ambiance',
      descFr: 'Salle de bain luxueuse avec installations modernes et ambiance spa'
    }
  ];
  
  // Montreal Downtown Lifestyle Images
  lifestyleImages = [
    {
      filename: 'assets/images/carouselimg1.avif',
      titleEn: 'Downtown Montreal',
      titleFr: 'Centre-ville de Montréal',
      descEn: 'Experience the vibrant energy of Montreal\'s downtown core',
      descFr: 'Découvrez l\'énergie vibrante du centre-ville de Montréal'
    },
    {
      filename: 'assets/images/carouselimg2.avif',
      titleEn: 'Montreal Streets',
      titleFr: 'Rues de Montréal',
      descEn: 'Walk through historic cobblestone streets and modern boulevards',
      descFr: 'Promenez-vous dans les rues pavées historiques et les boulevards modernes'
    },
    {
      filename: 'assets/images/carouselimg3.avif',
      titleEn: 'Cafe Culture',
      titleFr: 'Culture des Cafés',
      descEn: 'Enjoy Montreal\'s famous cafe culture and outdoor terraces',
      descFr: 'Profitez de la célèbre culture des cafés et terrasses extérieures de Montréal'
    },
    {
      filename: 'assets/images/carouselimg4.avif',
      titleEn: 'Montreal Lifestyle',
      titleFr: 'Style de Vie Montréalais',
      descEn: 'Discover the unique Montreal lifestyle and culture',
      descFr: 'Découvrez le style de vie et la culture uniques de Montréal'
    }
  ];
  
  features = [
    {
      icon: 'home',
      titleEn: 'Modern Apartments',
      titleFr: 'Appartements Modernes',
      descEn: 'Fully renovated units with contemporary amenities',
      descFr: 'Unités entièrement rénovées avec des commodités contemporaines'
    },
    {
      icon: 'school',
      titleEn: 'Student-Friendly',
      titleFr: 'Adapté aux Étudiants',
      descEn: 'Perfect location for students with easy campus access',
      descFr: 'Emplacement parfait pour les étudiants avec accès facile au campus'
    },
    {
      icon: 'location_city',
      titleEn: 'Prime Location',
      titleFr: 'Emplacement de Choix',
      descEn: 'Located in the heart of Montreal with excellent transit',
      descFr: 'Situé au cœur de Montréal avec un excellent transport'
    },
    {
      icon: 'security',
      titleEn: 'Secure Building',
      titleFr: 'Bâtiment Sécurisé',
      descEn: '24/7 security and controlled access for peace of mind',
      descFr: 'Sécurité 24/7 et accès contrôlé pour la tranquillité d\'esprit'
    },
    {
      icon: 'support_agent',
      titleEn: 'Exceptional Service',
      titleFr: 'Service Exceptionnel',
      descEn: 'Professional on-site management team and 24/7 maintenance',
      descFr: 'Équipe de gestion professionnelle sur place et maintenance 24/7'
    },
    {
      icon: 'eco',
      titleEn: 'Energy Efficient',
      titleFr: 'Efficace Énergétiquement',
      descEn: 'Green building features and sustainable living options',
      descFr: 'Caractéristiques de bâtiment vert et options de vie durable'
    }
  ];

  amenities = [
    { icon: 'ac_unit', titleEn: 'Air Conditioning', titleFr: 'Climatisation' },
    { icon: 'fitness_center', titleEn: 'Fitness Centre', titleFr: 'Centre de Fitness' },
    { icon: 'local_laundry_service', titleEn: 'Laundry Facilities', titleFr: 'Buanderie' },
    { icon: 'directions_transit', titleEn: 'Public Transit Nearby', titleFr: 'Transport Public à Proximité' },
    { icon: 'business_center', titleEn: 'Professional Management', titleFr: 'Gestion Professionnelle' },
    { icon: 'pets', titleEn: 'Pet Friendly', titleFr: 'Animaux Acceptés' },
    { icon: 'storage', titleEn: 'Storage Lockers', titleFr: 'Casiers de Rangement' },
    { icon: 'balcony', titleEn: 'Balcony (Most Units)', titleFr: 'Balcon (Plupart des Unités)' },
    { icon: 'directions_bike', titleEn: 'Bike Storage', titleFr: 'Rangement à Vélos' },
    { icon: 'elevator', titleEn: 'Elevators', titleFr: 'Ascenseurs' },
    { icon: 'apartment', titleEn: 'High Rise', titleFr: 'Tour' },
    { icon: 'videocam', titleEn: 'Security Cameras', titleFr: 'Caméras de Sécurité' },
    { icon: 'smoke_free', titleEn: 'No Smoking', titleFr: 'Non-Fumeur' },
    { icon: 'local_parking', titleEn: 'Parking Available', titleFr: 'Stationnement Disponible' },
    { icon: 'wifi', titleEn: 'WiFi Available', titleFr: 'WiFi Disponible' }
  ];

  openSpecialOfferPopup() {
    this.showSpecialOffer = true;
    document.body.style.overflow = 'hidden';
  }

  closeSpecialOfferPopup() {
    this.showSpecialOffer = false;
    document.body.style.overflow = 'auto';
  }
  
  ngOnInit() {
    this.startLifestyleCarousel();
    this.startApartmentCarousel();
    this.unsplash.getApartmentImages().subscribe({
      next: (result: any) => {
        this.apartmentWebImages = result.results.map((img: any) => img.urls.regular);
      },
      error: (error) => {
        console.warn('Failed to load Unsplash images:', error.message);
        // Fallback: use empty array, component will use placeholder images
        this.apartmentWebImages = [];
      }
    });
  }
  
  ngOnDestroy() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    if (this.lifestyleCarouselInterval) {
      clearInterval(this.lifestyleCarouselInterval);
    }
  }
  
  // Apartment carousel methods
  startApartmentCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextApartmentSlide();
    }, 4000); // Change slide every 4 seconds
  }
  
  nextApartmentSlide() {
    if (this.apartmentWebImages.length > 0) {
      this.currentSlide = (this.currentSlide + 1) % this.apartmentWebImages.length;
    }
  }
  
  goToApartmentSlide(index: number) {
    this.currentSlide = index;
    // Restart the automatic rotation
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    this.startApartmentCarousel();
  }
  
  // Lifestyle carousel methods
  startLifestyleCarousel() {
    this.lifestyleCarouselInterval = setInterval(() => {
      this.nextLifestyleSlide();
    }, 3000); // Change slide every 3 seconds
  }
  
  nextLifestyleSlide() {
    this.currentLifestyleSlide = (this.currentLifestyleSlide + 1) % this.lifestyleImages.length;
  }
  
  goToLifestyleSlide(index: number) {
    this.currentLifestyleSlide = index;
    // Restart the automatic rotation
    if (this.lifestyleCarouselInterval) {
      clearInterval(this.lifestyleCarouselInterval);
    }
    this.startLifestyleCarousel();
  }
  
  onSubmitContactForm(form: any) {
    if (form.valid) {
      console.log('Contact form submitted:', this.contactFormData);
      // Here you would typically send the data to your backend service
      // For now, we'll just show an alert
      alert(this.language.currentLanguage()() === 'en' 
        ? 'Thank you for your interest! We will contact you soon.' 
        : 'Merci pour votre intérêt! Nous vous contacterons bientôt.');
      
      // Reset form
      this.contactFormData = {
        name: '',
        email: '',
        phone: '',
        bedrooms: ''
      };
      form.resetForm();
    }
  }
  
  onImageError(event: any) {
    console.log('Image failed to load:', event.target.src);
    // Hide the broken image and show fallback
    event.target.style.display = 'none';
    const fallback = event.target.parentElement.querySelector('.image-fallback');
    if (fallback) {
      fallback.style.display = 'flex';
    }
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
  
  // Create safe YouTube URL
  getSafeVideoUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
