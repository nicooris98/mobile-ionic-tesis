import { Component, OnInit } from '@angular/core';
import { PhotoList } from 'src/app/models/photo-list.model';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
  standalone: false
})
export class PhotosPage implements OnInit {

  photoList: PhotoList = {
    page: 1,
    limit: 10,
    images: []
  }

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.loadPhotos()
  }

  loadPhotos() {
    this.imageService.getList(this.photoList.page, this.photoList.limit).subscribe(response => {
      this.photoList.images = response.images
    })
  }

  nextPage() {
    this.photoList.page++;
    this.loadPhotos();
  }

  prevPage() {
    if (this.photoList.page > 1) {
      this.photoList.page--;
      this.loadPhotos();
    }
  }

  formatTimestamp(timestamp: string): string {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Formato local automático
  }

}
