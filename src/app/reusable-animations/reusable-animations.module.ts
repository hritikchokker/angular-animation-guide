import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableAnimationsComponent } from './reusable-animations.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';




const routes: Routes = [
  {
    path: '',
    component: ReusableAnimationsComponent
  }
];

@NgModule({
  declarations: [
    ReusableAnimationsComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ]
})
export class ReusableAnimationsModule { }
