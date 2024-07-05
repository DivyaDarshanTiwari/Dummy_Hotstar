import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url = 'https://api.disneyapi.dev/character';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    if (this.url) {
      return this.http.get(this.url).pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
    } else {
      console.error('Cannot find the url');
      return of('Cannot find the url');
    }
  }
}
