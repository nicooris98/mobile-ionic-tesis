import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageAPI } from '../models/image-api.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl: string = environment.API_URL

  constructor(private http: HttpClient) { }

  // Método para obtener las últimas imágenes
  getLatestImages(): Observable<ImageAPI[]> {
    return this.http.get<ImageAPI[]>(`${this.apiUrl}/latests-images`);
  }
}
