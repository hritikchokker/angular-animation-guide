import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MultiFeatureComponent } from './multi-feature.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MultiFeatureComponent
  }
];

@NgModule({
  declarations: [
    MultiFeatureComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class MultiFeatureModule { }
