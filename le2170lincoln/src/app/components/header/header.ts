import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog';
import { Language } from '../../services/language';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule, MatSidenavModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  mobileMenuOpen = signal(false);
  menuItems = [
    { path: '/home', labelEn: 'Home', labelFr: 'Accueil' },
    { path: '/apartments', labelEn: 'Apartments', labelFr: 'Appartements' },
    { path: '/student-living', labelEn: 'Student Living', labelFr: 'Vie Étudiante' },
    { path: '/amenities', labelEn: 'Amenities', labelFr: 'Commodités' },
    { path: '/about', labelEn: 'About Us', labelFr: 'À Propos' },
    { path: '/contact', labelEn: 'Contact Us', labelFr: 'Nous Contacter' }
  ];
  
  constructor(
    public authService: AuthService,
    private dialog: MatDialog,
    private router: Router,
    public language: Language
  ) {
    this.authService.checkAuthStatus();
  }
  
  switchLanguage(lang: string) {
    this.language.setLanguage(lang as 'en' | 'fr');
  }
  
  getLabel(item: any): string {
    return this.language.currentLanguage()() === 'en' ? item.labelEn : item.labelFr;
  }
  
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '650px',
      maxWidth: '95vw',
      disableClose: false
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/listings-management']);
      }
    });
  }
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
  
  goToManagement(): void {
    this.router.navigate(['/listings-management']);
  }
  
  toggleMobileMenu(): void {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }
  
  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
