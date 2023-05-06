import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AppMaterialModule } from '../app.material.module';

@NgModule({
  declarations: [HeaderComponent, SearchBarComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [HeaderComponent, SearchBarComponent,  ],
})
export class SharedModule {}
