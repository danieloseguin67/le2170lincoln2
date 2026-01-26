import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UnsplashService {
  private accessKey = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash API key
  private apiUrl = 'https://api.unsplash.com/search/photos';

  constructor(private http: HttpClient) {}

  getApartmentImages(query: string = 'apartment room', perPage: number = 10): Observable<any> {
    // Skip API call if no valid access key is configured
    if (!this.accessKey || this.accessKey === 'YOUR_UNSPLASH_ACCESS_KEY') {
      return of({ results: [] });
    }
    
    return this.http.get<any>(`${this.apiUrl}?query=${query}&per_page=${perPage}&client_id=${this.accessKey}`).pipe(
      catchError(error => {
        console.warn('Unsplash API error:', error.message);
        return of({ results: [] });
      })
    );
  }
}
