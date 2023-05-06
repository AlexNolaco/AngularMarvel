import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements  OnInit{
  rowspan = 1;
  colspan = 1;
  color = 'red';
  characterList: any;

  ngOnInit(): void {
    this.characterList = [
      {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},

    ];
    // esses dados virão do serviço da marvel
  }
}
