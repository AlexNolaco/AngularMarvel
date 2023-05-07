import { Component } from '@angular/core';

import { CharacterService } from '../character.service';
import { Character } from '../models/character.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent {
  constructor(
    private characterService: CharacterService,
    private router: Router
  ) {}
  characterList: Character[] = [];
  localStorageKey = 'character-keword';
  noResult: boolean = false;

  getCharacters(keyWord: string) {
    if (keyWord) {
      this.characterService
        .getCharactersByKeyword(keyWord)
        .subscribe((characters) => {
          this.characterList = characters;
          this.noResult = this.notFound();
        });
    }
  }

  getImage(character: Character): string {
    return this.characterService.getImage(
      'landscape_incredible',
      character.thumbnail
    );
  }

  redirectToDetailPage(character: Character) {
    this.router.navigateByUrl(`/character-details/${character.id}`);
  }

  notFound() {
    return this.characterList.length == 0;
  }

  hasContent() {
    return (
      this.characterList.length > 0 ||
      localStorage.getItem(this.localStorageKey)
    );
  }
}
