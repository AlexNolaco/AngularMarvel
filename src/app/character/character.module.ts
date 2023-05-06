import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  declarations: [
    CharacterDetailComponent,
    CharacterListComponent],
  imports: [CommonModule],
})
export class CharacterModule {}
