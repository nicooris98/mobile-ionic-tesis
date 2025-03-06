import { Component, OnInit } from '@angular/core';
import { ImageAPI } from 'src/app/models/image-api.model';
import { ImageService } from 'src/app/services/image.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  imageUrls: ImageAPI[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    // Solicitar las URLs de las últimas imágenes
    this.imageService.getLatestImages().subscribe(response => {
      this.imageUrls = response
    },
  err => {
    console.log(err)
  });
  }

}
