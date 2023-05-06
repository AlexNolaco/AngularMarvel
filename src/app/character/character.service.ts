import {
  HttpClient,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from './models/character.model';
import { environment } from '../../environments/environment';
import { Thumbnail } from './models/thumbnail.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(keyWord: string): Observable<Character[]> {
    const options = new HttpParams().set('nameStartsWith', keyWord);
    return this.http
      .get<Character[]>(`${environment.apiUrl}characters`, { params: options })
      .pipe(map((response: any) => response.data.results));
  }

  getImage(variant: string, thumbnail: Thumbnail): string {
    return `${thumbnail.path}/${variant}.${thumbnail.extension}`;
  }

}
