import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Photo } from 'src/app/models/Photo';
@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  userData: any; // Save logged in user data
  constructor(public db: AngularFireDatabase) {}

  getPhotos(): AngularFireList<Photo> {
    return this.db.list('photos');
  }
}
