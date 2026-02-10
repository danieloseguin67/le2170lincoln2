import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ApartmentDetailComponent } from '../../components/apartment-detail/apartment-detail';
import { Language } from '../../services/language';

@Component({
  selector: 'app-apartments',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatChipsModule, MatDialogModule, CommonModule, RouterLink],
  templateUrl: './apartments.html',
  styleUrl: './apartments.scss'
})
export class ApartmentsComponent {
  constructor(
    private dialog: MatDialog,
    private router: Router,
    public language: Language
  ) {}
  
  apartments = [
    {
      id: 1,
      type: '1BR',
      size: '650',
      rent: '1352',
      available: true,
      features: ['Balcon', 'Rénové', 'Climatisation'],
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop',
      detailImages: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop'
      ]
    },
    {
      id: 2,
      type: '2BR',
      size: '900',
      rent: '1752',
      available: true,
      features: ['2 Salles de bain', 'Balcon', 'Lave-vaisselle'],
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop',
      detailImages: [
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&auto=format&fit=crop'
      ]
    },
    {
      id: 3,
      type: 'Studio',
      size: '450',
      rent: '1052',
      available: false,
      features: ['Compact', 'Rénové', 'Parfait pour étudiants'],
      image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop',
      detailImages: [
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&auto=format&fit=crop'
      ]
    }
  ];
  
  viewDetails(apartment: any): void {
    const dialogRef = this.dialog.open(ApartmentDetailComponent, {
      width: '900px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      data: apartment,
      panelClass: 'apartment-detail-dialog-container'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'inquire') {
        this.router.navigate(['/contact']);
      }
    });
  }
}
