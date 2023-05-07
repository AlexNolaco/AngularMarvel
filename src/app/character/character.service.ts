import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from './models/character.model';
import { environment } from '../../environments/environment';
import { Thumbnail } from './models/thumbnail.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharactersByKeyword(keyWord: string): Observable<Character[]> {
    const options = new HttpParams().set('nameStartsWith', keyWord);
    return this.http
      .get<Character[]>(`${environment.apiUrl}characters`, { params: options })
      .pipe(map((response: any) => response.data.results));
  }

  getCharacterById(id: number): Observable<Character[]> {
    return this.http
      .get<Character>(`${environment.apiUrl}characters/${id}`)
      .pipe(map((response: any) => response.data.results[0]));
  }

  getImage(variant: string, thumbnail: Thumbnail): string {
    return `${thumbnail.path}/${variant}.${thumbnail.extension}`;
  }
}
