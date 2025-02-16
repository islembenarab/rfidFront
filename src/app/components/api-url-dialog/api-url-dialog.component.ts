// src/app/components/api-url-dialog/api-url-dialog.component.ts
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-api-url-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogContent, MatDialogActions, MatFormField, MatDialogTitle, MatInput, MatButton],
  templateUrl: './api-url-dialog.component.html',
  styleUrls: ['./api-url-dialog.component.css']
})
export class ApiUrlDialogComponent {
  apiUrl: string = '';

  constructor(
    public dialogRef: MatDialogRef<ApiUrlDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSave(): void {
    if (this.apiUrl) {
      this.dialogRef.close(this.apiUrl);
    } else {
      alert('Please enter a valid API URL.');
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
