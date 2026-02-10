import { Component, Inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface ListingData {
  id: string;
  titleFr: string;
  titleEn: string;
  type: string;
  size: string;
  rent: string;
  available: boolean;
  bedrooms: number;
  bathrooms: number;
  features: string[];
  images?: string[];
}

@Component({
  selector: 'app-listing-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule
  ],
  templateUrl: './listing-edit-dialog.html',
  styleUrl: './listing-edit-dialog.scss'
})
export class ListingEditDialogComponent {
  listing: ListingData;
  isNewListing: boolean;
  imageFiles: File[] = [];
  imagePreviews: { name: string; url: string }[] = [];
  uploading = signal(false);
  uploadError = signal('');
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { listing: ListingData | null },
    private dialogRef: MatDialogRef<ListingEditDialogComponent>,
    private http: HttpClient
  ) {
    this.isNewListing = !data.listing;
    this.listing = data.listing || {
      id: '',
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
    };
  }
  
  onSave(): void {
    const existingCount = this.listing.images?.length ?? 0;
    const selectedCount = this.imageFiles.length;

    // If user selected new files, require at least 2; otherwise
    // fall back to existing images count.
    const effectiveCount = selectedCount > 0 ? selectedCount : existingCount;

    if (effectiveCount < 2) {
      this.uploadError.set('Please select at least two apartment photos.');
      return;
    }

    // If no new files were chosen but there are already enough images,
    // just save the listing without uploading again.
    if (selectedCount === 0) {
      this.dialogRef.close(this.listing);
      return;
    }

    this.uploading.set(true);
    this.uploadError.set('');

    const formData = new FormData();
    this.imageFiles.forEach(file => formData.append('images', file));

    this.http.post<{ urls: string[] }>('/api/upload-images', formData).subscribe({
      next: (response) => {
        this.listing.images = response.urls;
        this.uploading.set(false);
        this.dialogRef.close(this.listing);
      },
      error: (error) => {
        console.error('Image upload failed', error);
        this.uploading.set(false);
        this.uploadError.set('Failed to upload images. Please try again.');
      }
    });
  }
  
  onCancel(): void {
    this.dialogRef.close(null);
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    // Clean up previous object URLs
    this.imagePreviews.forEach(p => URL.revokeObjectURL(p.url));

    this.imageFiles = Array.from(input.files);
    this.imagePreviews = this.imageFiles.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));
  }
}
