import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../character.service';
import { Character } from '../models/character.model';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  id: string | any;
  character: Character | any;
  characterImage: string | any;

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    await this.loadData();
  }

  async loadData() {
    await this.characterService
      .getCharacterById(this.id)
      .subscribe((character) => {
        this.character = character;
        this.getImage();
      });
  }

  getImage() {
    this.characterImage = this.characterService.getImage(
      'detail',
      this.character.thumbnail
    );
  }
}
