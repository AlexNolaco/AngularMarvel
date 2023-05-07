import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AppMaterialModule } from '../app.material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    LandingPageComponent,
    NotFoundPageComponent,
  ],
  imports: [CommonModule, AppMaterialModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    LandingPageComponent,
    NotFoundPageComponent,
  ],
})
export class SharedModule {}
