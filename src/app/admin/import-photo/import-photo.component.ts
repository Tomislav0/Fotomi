import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Photo } from 'src/app/models/Photo';
import { NotificationService } from 'src/app/shared/şervices/notification.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-import-photo',
  templateUrl: './import-photo.component.html',
  styleUrls: ['./import-photo.component.scss'],
})
export class ImportPhotoComponent {
  importphFG: FormGroup;

  constructor(
    fb: FormBuilder,
    public adminService: AdminService,
    public notificationService: NotificationService
  ) {
    this.importphFG = fb.group({
      url: ['', Validators.required],
      title: [''],
      description: [''],
    });
  }

  importSubmit() {
    let photo: Photo = this.importphFG.value;

    this.adminService
      .importPhoto(photo)
      .catch((err) => console.log(err))
      .finally(() => {
        this.notificationService.success();
        this.importphFG.reset();
      });
  }
}
