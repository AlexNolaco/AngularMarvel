import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { AppMaterialModule } from '../app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [
    CharacterDetailComponent,
    CharacterListComponent,
    CharacterCardComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class CharacterModule {}
