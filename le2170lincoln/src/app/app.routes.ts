import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent) 
  },
  { 
    path: 'apartments', 
    loadComponent: () => import('./pages/apartments/apartments').then(m => m.ApartmentsComponent) 
  },
  { 
    path: 'student-living', 
    loadComponent: () => import('./pages/student-living/student-living').then(m => m.StudentLivingComponent) 
  },
  { 
    path: 'amenities', 
    loadComponent: () => import('./pages/amenities/amenities').then(m => m.AmenitiesComponent) 
  },
  { 
    path: 'about', 
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent) 
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent) 
  },
  { path: '**', redirectTo: '/home' }
];
