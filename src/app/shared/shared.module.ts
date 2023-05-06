import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AppMaterialModule } from '../app.material.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SearchBarComponent, FooterComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [HeaderComponent, SearchBarComponent, FooterComponent],
})
export class SharedModule {}
