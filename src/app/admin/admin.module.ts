import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ImportPhotoComponent } from './import-photo/import-photo.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [ImportPhotoComponent],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
