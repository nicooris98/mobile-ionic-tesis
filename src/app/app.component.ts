
import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Imagenes', url: '/images', icon: 'aperture' },
    { title: 'Alerta', url: '/folder/alert', icon: 'warning' }
  ];
  public labels = ['Perfil'];
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout()
  }
}
