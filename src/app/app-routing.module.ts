import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailComponent } from './character/character-detail/character-detail.component';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

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
    path: 'character-details/:id',
    component: CharacterDetailComponent
  },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
