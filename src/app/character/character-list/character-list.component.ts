import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../character.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  constructor(private characterService: CharacterService) {}
  characterList: Character[] = [];

  rowspan = 1;
  colspan = 1;
  color = 'red';

  ngOnInit(): void {}

  async getCharacters(keyWord: string) {
    keyWord = 'hulk';
    if (keyWord) {
      await this.characterService
        .getCharacters(keyWord)
        .subscribe((characters) => {
          this.characterList = characters;
        });
    }
  }

  getImage(character: any): string {
    return this.characterService.getImage('landscape_incredible', character.thumbnail);
  }

}
