import { Component, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Language } from '../../services/language';

@Component({
  selector: 'app-login-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './login-dialog.html',
  styleUrl: './login-dialog.scss'
})
export class LoginDialogComponent {
  username = '';
  password = '';
  errorMessage = signal('');
  
  constructor(
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private authService: AuthService,
    public language: Language
  ) {}
  
  onLogin(): void {
    if (!this.username || !this.password) {
      this.errorMessage.set('Please enter username and password');
      return;
    }
    
    const success = this.authService.login(this.username, this.password);
    
    if (success) {
      this.dialogRef.close(true);
    } else {
      this.errorMessage.set('Invalid username or password');
    }
  }
  
  onCancel(): void {
    this.dialogRef.close(false);
  }
}
