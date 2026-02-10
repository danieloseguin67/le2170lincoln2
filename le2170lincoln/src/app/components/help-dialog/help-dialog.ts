import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-help-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './help-dialog.html',
  styleUrl: './help-dialog.scss'
})
export class HelpDialogComponent {
  constructor(private dialogRef: MatDialogRef<HelpDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
