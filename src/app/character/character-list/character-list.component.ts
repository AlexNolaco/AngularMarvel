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

  async getCharacters(keyWord: string) {
    if (keyWord) {
      await this.characterService
        .getCharactersByKeyword(keyWord)
        .subscribe((characters) => {
          this.characterList = characters;
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
}
