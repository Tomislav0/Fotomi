import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Photo } from '../models/Photo';
import { PhotosService } from '../shared/şervices/photos.service';
@Injectable({
  providedIn: 'root',
})
export class AdminService {
  photosRef: AngularFireList<any>;
  constructor(
    public afd: AngularFireDatabase, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    public photoService: PhotosService
  ) {
    this.photosRef = photoService.getPhotos();
  }

  importPhoto(photo: Photo) {
    return this.photosRef.push(photo);
  }
}
