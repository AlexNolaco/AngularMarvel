import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../character.service';
import { Character } from '../models/character.model';

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
  tileBackground = '#f7f2f2';

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.loadData();
  }

  loadData(): void {
    this.characterService.getCharacterById(this.id).subscribe((result) => {
      this.character = result;
      this.getDescription();
      this.getImage();
    });
  }

  getDescription(): void {
    if (!this.character.description)
      this.character.description =
        'Infelizmente não há descrição disponível para este personagem.';
  }

  getImage(): void {
    this.characterImage = this.characterService.getImage(
      'detail',
      this.character.thumbnail
    );
  }
}
