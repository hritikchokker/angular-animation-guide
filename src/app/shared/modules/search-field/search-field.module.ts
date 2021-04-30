import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchFieldComponent } from './search-field.component';
const common = [
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    SearchFieldComponent
  ],
  imports: [
    CommonModule,
    ...common
  ], exports: [...common, SearchFieldComponent]
})
export class SearchFieldModule { }
