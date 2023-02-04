import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  userData: any; // Save logged in user data
  constructor(public snackBar: MatSnackBar) {}
  success() {
    this.snackBar.open('Success', undefined, {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 2000,
      panelClass: ['green-snackbar'],
    });
  }
}
