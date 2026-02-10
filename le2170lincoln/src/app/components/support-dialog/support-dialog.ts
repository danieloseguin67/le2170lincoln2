import { Component, Inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-support-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './support-dialog.html',
  styleUrl: './support-dialog.scss'
})
export class SupportDialogComponent {
  name = '';
  phone = '';
  email = '';
  message = '';
  errorMessage = signal('');

  constructor(
    private dialogRef: MatDialogRef<SupportDialogComponent>,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  submit(): void {
    if (!this.name || !this.email || !this.message) {
      this.errorMessage.set('Please provide your name, email, and a short description of the issue.');
      return;
    }

    const subject = encodeURIComponent('Support Request - 2170 Lincoln Listings Portal');
    const body = encodeURIComponent(
      `Name: ${this.name}\n` +
      `Phone: ${this.phone}\n` +
      `Email: ${this.email}\n\n` +
      `Question / Issue:\n${this.message}`
    );

    const mailto = `mailto:daniel@seguin.dev?subject=${subject}&body=${body}`;

    if (isPlatformBrowser(this.platformId)) {
      window.location.href = mailto;
    }

    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
