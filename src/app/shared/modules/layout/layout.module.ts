import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderSidenavComponent } from './header-sidenav/header-sidenav.component';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    MainComponent,
    HeaderSidenavComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ], exports: [FooterComponent,
    MainComponent,
    HeaderSidenavComponent,
    LayoutComponent]
})
export class LayoutModule { }
