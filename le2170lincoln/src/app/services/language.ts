import { Injectable, signal } from '@angular/core';

type SupportedLanguage = 'en' | 'fr';

type TranslationMap = Record<string, string>;

interface Translations {
  en: TranslationMap;
  fr: TranslationMap;
}

// Central translation registry
const TRANSLATIONS: Translations = {
  en: {
    // Header
    'header.login': 'Login',
    'header.logout': 'Logout',
    'header.management': 'Management',

    // Footer
    'footer.leasingOffice': 'Leasing Office',
    'footer.followUs': 'Follow Us',
    'footer.allRightsReserved': 'All rights reserved.',

    // About page
    'about.pageTitle': 'About Us',
    'about.pageSubtitle': 'Learn more about Le 2170 Lincoln',
    'about.heroTitle': 'Welcome to Le 2170 Lincoln',
    'about.heroText':
      "A distinguished address in the heart of Montreal since the 1960s, where history meets modern comfort.",
    'about.ourStoryTitle': 'Our Story',
    'about.neighborhoodTitle': 'The Lincoln Avenue Neighborhood',
    'about.neighborhoodSubtitle':
      "Discover one of Montreal's most dynamic and convenient locations",
    'about.valuesTitle': 'Our Values & Commitment',
    'about.ctaTitle': 'Ready to Call Le 2170 Lincoln Home?',
    'about.ctaText': 'Join our community and experience the best of Montreal living.',
    'about.ctaViewApartments': 'View Available Apartments',
    'about.ctaContact': 'Contact Us Today',

    // Contact page
    'contact.pageTitle': 'Contact Us',
    'contact.pageSubtitle': 'Get in touch with our leasing team',
    'contact.formTitle': 'Send us a Message',
    'contact.fullName': 'Full Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.inquiryType': 'Inquiry Type',
    'contact.message': 'Message',
    'contact.sendMessage': 'Send Message',
    'contact.leasingOffice': 'Leasing Office',
    'contact.address': 'Address',
    'contact.officeHours': 'Office Hours',
    'contact.locationTitle': 'Location',
    'contact.interactiveMap': 'Interactive Map',
    'contact.getDirections': 'Get Directions',
    'contact.viewLargerMap': 'View Larger Map',
  },
  fr: {
    // Header
    'header.login': 'Connexion',
    'header.logout': 'Déconnexion',
    'header.management': 'Gestion',

    // Footer
    'footer.leasingOffice': 'Bureau de Location',
    'footer.followUs': 'Suivez-Nous',
    'footer.allRightsReserved': 'Tous droits réservés.',

    // About page
    'about.pageTitle': 'À Propos',
    'about.pageSubtitle': 'En savoir plus sur Le 2170 Lincoln',
    'about.heroTitle': 'Bienvenue au 2170 Lincoln',
    'about.heroText':
      "Une adresse distinguée au cœur de Montréal depuis les années 1960, où l'histoire rencontre le confort moderne.",
    'about.ourStoryTitle': 'Notre Histoire',
    'about.neighborhoodTitle': "Le Quartier de l'Avenue Lincoln",
    'about.neighborhoodSubtitle':
      "Découvrez l'un des emplacements les plus dynamiques et pratiques de Montréal",
    'about.valuesTitle': 'Nos Valeurs & Engagement',
    'about.ctaTitle': 'Prêt à Faire du 2170 Lincoln Votre Maison?',
    'about.ctaText': 'Rejoignez notre communauté et vivez le meilleur de Montréal.',
    'about.ctaViewApartments': 'Voir les Appartements Disponibles',
    'about.ctaContact': 'Nous Contacter',

    // Contact page
    'contact.pageTitle': 'Nous Contacter',
    'contact.pageSubtitle': 'Contactez notre équipe de location',
    'contact.formTitle': 'Envoyez-nous un Message',
    'contact.fullName': 'Nom Complet',
    'contact.email': 'Courriel',
    'contact.phone': 'Téléphone',
    'contact.inquiryType': 'Type de Demande',
    'contact.message': 'Message',
    'contact.sendMessage': 'Envoyer le Message',
    'contact.leasingOffice': 'Bureau de Location',
    'contact.address': 'Adresse',
    'contact.officeHours': "Heures d'Ouverture",
    'contact.locationTitle': 'Emplacement',
    'contact.interactiveMap': 'Carte Interactive',
    'contact.getDirections': 'Obtenir des Directions',
    'contact.viewLargerMap': 'Voir Carte Plus Grande',
  },
};

@Injectable({
  providedIn: 'root',
})
export class Language {
  private readonly defaultLanguage: SupportedLanguage = 'en';
  private readonly language = signal<SupportedLanguage>(this.defaultLanguage);

  currentLanguage() {
    return this.language.asReadonly();
  }

  setLanguage(lang: SupportedLanguage) {
    if (lang === 'en' || lang === 'fr') {
      this.language.set(lang);
    }
  }

  t(key: string): string {
    const lang = this.language();
    const map = TRANSLATIONS[lang] ?? TRANSLATIONS[this.defaultLanguage];
    return map[key] ?? TRANSLATIONS[this.defaultLanguage][key] ?? key;
  }
}
