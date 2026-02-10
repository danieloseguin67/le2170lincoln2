import { Component, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { Language } from '../../services/language';

@Component({
  selector: 'app-apartment-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './apartment-detail.html',
  styleUrl: './apartment-detail.scss'
})
export class ApartmentDetailComponent {
  selectedImageIndex = signal(0);
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public apartment: any,
    private dialogRef: MatDialogRef<ApartmentDetailComponent>,
    public language: Language
  ) {}
  
  selectImage(index: number): void {
    this.selectedImageIndex.set(index);
  }
  
  previousImage(): void {
    const current = this.selectedImageIndex();
    const newIndex = current > 0 ? current - 1 : this.apartment.detailImages.length - 1;
    this.selectedImageIndex.set(newIndex);
  }
  
  nextImage(): void {
    const current = this.selectedImageIndex();
    const newIndex = current < this.apartment.detailImages.length - 1 ? current + 1 : 0;
    this.selectedImageIndex.set(newIndex);
  }
  
  close(): void {
    this.dialogRef.close();
  }
  
  inquire(): void {
    this.dialogRef.close('inquire');
  }
}
