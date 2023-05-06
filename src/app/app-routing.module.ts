import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search-characters',
    pathMatch: 'full',
  },
  {
    path: 'search-characters',
    component: CharacterListComponent
  },
  {
    path: 'character-details',
    component: CharacterDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
