import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Lightbox } from 'ngx-lightbox';
import { IAlbum } from 'ngx-lightbox/lightbox-event.service';
import { first, Observable } from 'rxjs';
import { Photo } from 'src/app/models/Photo';
import { PhotosService } from 'src/app/shared/şervices/photos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  photosUrls: string[] = [];
  photos: any = [];
  test: IAlbum[] = [
    {
      src: 'https://lh3.googleusercontent.com/pw/AM-JKLU0Z-k4L4sSzBxC4KVZU6sMAAwKxwxZdFwRWiXxQiIgDLM3onn4cMIraCd0bjOTnz0BESg_ewEl2ToHgYEntnLMnMqK7r290r1CJJIMWdKTMsBgsl2-DKBI_Tr9uCDw_dte3-OQc9mvf2KWQp2zo44c=w1361-h907-no?authuser=1',
      thumb:
        'https://lh3.googleusercontent.com/pw/AM-JKLU0Z-k4L4sSzBxC4KVZU6sMAAwKxwxZdFwRWiXxQiIgDLM3onn4cMIraCd0bjOTnz0BESg_ewEl2ToHgYEntnLMnMqK7r290r1CJJIMWdKTMsBgsl2-DKBI_Tr9uCDw_dte3-OQc9mvf2KWQp2zo44c=w1361-h907-no?authuser=1',
    },
  ];
  constructor(
    public db: AngularFireDatabase,
    photosService: PhotosService,
    public lb: Lightbox
  ) {
    photosService
      .getPhotos()
      .valueChanges()
      .pipe(first())
      .subscribe((photos) => (this.photos = photos));
  }
  open() {
    console.log('otvorito', this.test);

    this.lb.open(this.test, 0);
  }
}
