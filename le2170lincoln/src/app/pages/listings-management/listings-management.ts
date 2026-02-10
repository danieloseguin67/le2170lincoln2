import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ListingEditDialogComponent, ListingData } from '../../components/listing-edit-dialog/listing-edit-dialog';
import { HelpDialogComponent } from '../../components/help-dialog/help-dialog';
import { SupportDialogComponent } from '../../components/support-dialog/support-dialog';

@Component({
  selector: 'app-listings-management',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule
  ],
  templateUrl: './listings-management.html',
  styleUrl: './listings-management.scss'
})
export class ListingsManagementComponent {
  displayedColumns: string[] = ['actions', 'id', 'titleFr', 'titleEn', 'type', 'rent', 'available'];
  
  listings = signal<ListingData[]>([
    { 
      id: 'apt_001', 
      titleFr: '2170, Avenue Lincoln, apt. 1007, Montréal (Ville-Marie)',
      titleEn: '2170, Lincoln Avenue, apt. 1007, Montreal (Ville-Marie)',
      type: '1BR',
      size: '650',
      rent: '1352',
      available: true,
      bedrooms: 1,
      bathrooms: 1,
      features: ['Balcon', 'Rénové', 'Climatisation'],
      images: []
    },
    { 
      id: 'apt_002', 
      titleFr: '2170, Avenue Lincoln, apt. 1008, Montréal (Ville-Marie)',
      titleEn: '2170, Lincoln Avenue, apt. 1008, Montreal (Ville-Marie)',
      type: '1BR',
      size: '650',
      rent: '1352',
      available: true,
      bedrooms: 1,
      bathrooms: 1,
      features: ['Balcon', 'Rénové'],
      images: []
    },
    { 
      id: 'apt_003', 
      titleFr: '2170, Avenue Lincoln, apt. 1009, Montréal (Ville-Marie)',
      titleEn: '2170, Lincoln Avenue, apt. 1009, Montreal (Ville-Marie)',
      type: '2BR',
      size: '900',
      rent: '1752',
      available: true,
      bedrooms: 2,
      bathrooms: 2,
      features: ['2 Salles de bain', 'Balcon', 'Lave-vaisselle'],
      images: []
    },
    { 
      id: 'apt_004', 
      titleFr: '2170, Avenue Lincoln, apt. 1010, Montréal (Ville-Marie)',
      titleEn: '2170, Lincoln Avenue, apt. 1010, Montreal (Ville-Marie)',
      type: '1BR',
      size: '650',
      rent: '1352',
      available: false,
      bedrooms: 1,
      bathrooms: 1,
      features: ['Balcon'],
      images: []
    },
    { 
      id: 'apt_005', 
      titleFr: '2170, Avenue Lincoln, apt. 311, Montréal (Ville-Marie)',
      titleEn: '2170, Lincoln Avenue, apt. 311, Montreal (Ville-Marie)',
      type: 'Studio',
      size: '450',
      rent: '1052',
      available: false,
      bedrooms: 0,
      bathrooms: 1,
      features: ['Compact', 'Rénové', 'Parfait pour étudiants'],
      images: []
    }
  ]);
  
  constructor(
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    // Check if user is authenticated
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }
  
  addListing(): void {
    const currentListings = this.listings();
    const maxNumber = currentListings.reduce((max, listing) => {
      const match = listing.id.match(/^apt_(\d+)$/);
      const num = match ? parseInt(match[1], 10) : 0;
      return num > max ? num : max;
    }, 0);
    const nextNumber = maxNumber + 1;
    const nextId = `apt_${String(nextNumber).padStart(3, '0')}`;

    const dialogRef = this.dialog.open(ListingEditDialogComponent, {
      width: '800px',
      maxWidth: '95vw',
      data: {
        listing: {
          id: nextId,
          titleFr: '',
          titleEn: '',
          type: '1BR',
          size: '',
          rent: '',
          available: true,
          bedrooms: 1,
          bathrooms: 1,
          features: [],
          images: []
        }
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listings.update(current => [...current, result]);
        // In production, this would save to SQL Server database
        console.log('Saving to database:', result);
      }
    });
  }
  
  editListing(listing: ListingData): void {
    const dialogRef = this.dialog.open(ListingEditDialogComponent, {
      width: '800px',
      maxWidth: '95vw',
      data: { listing: { ...listing } }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.listings.update(current => 
          current.map(l => l.id === result.id ? result : l)
        );
        // In production, this would update SQL Server database
        console.log('Updating database:', result);
      }
    });
  }
  
  removeListing(listing: ListingData): void {
    if (confirm(`Are you sure you want to delete listing ${listing.id}?`)) {
      this.listings.update(current => 
        current.filter(l => l.id !== listing.id)
      );
      // In production, this would delete from SQL Server database
      console.log('Deleting from database:', listing.id);
    }
  }
  
  saveAllListings(): void {
    // In production, this would sync all listings to SQL Server database
    console.log('Saving all listings:', this.listings());
    alert('All listings saved successfully!');
  }

  openHelpDialog(): void {
    this.dialog.open(HelpDialogComponent, {
      width: '600px',
      maxWidth: '95vw'
    });
  }

  openSupportDialog(): void {
    this.dialog.open(SupportDialogComponent, {
      width: '600px',
      maxWidth: '95vw'
    });
  }
}
