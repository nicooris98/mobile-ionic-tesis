import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ImageAPI } from '../models/image-api.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { PhotoList } from '../models/photo-list.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl: string = environment.API_URL

  constructor(private http: HttpClient, private authService: AuthService) { }

  // Método para obtener las últimas imágenes
  getLatestImages(): Observable<ImageAPI[]> {
    const headers = this.authService.getAuthHeaders()
    return this.http.get<ImageAPI[]>(`${this.apiUrl}/photos/latests-images`, headers)
  }

  getList(page: number, limit: number): Observable<PhotoList> {
    const headers = this.authService.getAuthHeaders()
    return this.http.get<PhotoList>(`${this.apiUrl}/photos/list?page=${page}&limit=${limit}`, headers)
  }
}
