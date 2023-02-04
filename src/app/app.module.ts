import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './components/home/home.component';
import {
  NgOptimizedImage,
  provideImageKitLoader,
  provideImgixLoader,
} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgOptimizedImage,
    StoreModule.forRoot({}, {}),
    LightboxModule,
  ],
  providers: [
    AuthService,
    provideImageKitLoader('https://lh3.googleusercontent.com/'),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
