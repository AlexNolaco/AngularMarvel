import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterService } from '../character.service';
import { Character } from '../models/character.model';
import { environment } from '../../../environments/environment';

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
    this.gotoTop();
  }

  loadData(): void {
    this.characterService.getCharacterById(this.id).subscribe((result) => {
      this.character = result;
      this.getDescription();
      this.getImage();
    });
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  getDescription(): void {
    const description = this.character.description;
    if (!description || description.trim() == '')
      this.character.description = environment.messages.character.withoutDescription;
  }

  getImage(): void {
    this.characterImage = this.characterService.getImage(
      'detail',
      this.character.thumbnail
    );
  }
}
