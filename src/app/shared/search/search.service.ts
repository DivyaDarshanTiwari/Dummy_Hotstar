import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  getAPIData(limit: number, offset: number) {
    const apiUrl = `${this.url}?limit=${limit}&offset=${offset}`;
    // let x =`${this.url}?limit=${limit}&offset=${offset}`
    return this.http.get(apiUrl).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
}
