import { Component, OnInit } from '@angular/core';
import { ImageAPI } from 'src/app/models/image-api.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  imageUrls: ImageAPI[] = [];

  mockImageAPI: ImageAPI = {
    filename: "test.jpg",
    personDetected: true,
    timestamp: Date.now().toString(),
    url: "src\assets\images\noperson.jpg"
  }

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    // Solicitar las URLs de las últimas imágenes
    this.imageService.getLatestImages().subscribe(response => {
      this.imageUrls = response
    },
  err => {
    console.log(err)
    this.imageUrls = [this.mockImageAPI]
  });
  }

}
