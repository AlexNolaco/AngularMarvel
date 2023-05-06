import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Character } from './models/character.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(term: string): Observable<Character[]> {
    const options = new HttpParams().set('nameStartsWith', term);
    return this.http
      .get<Character[]>(`${environment.apiUrl}characters`, { params: options })
      .pipe(
        map((response: any) => response.data.results),
        catchError(this.handleError)
      );
  }

  handleError = (error: HttpErrorResponse) => {
    return throwError(() => error);
  };
}
