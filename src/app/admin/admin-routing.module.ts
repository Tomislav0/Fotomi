import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportPhotoComponent } from './import-photo/import-photo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'import',
  },
  { path: 'import', component: ImportPhotoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
