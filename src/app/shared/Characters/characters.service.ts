import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { type CharaterInterface } from './charater-interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private url = 'https://api.disneyapi.dev/character';
  private selected_Character?: CharaterInterface | null
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

  public get_selected(selected_Card:CharaterInterface | null){
    this.selected_Character =  selected_Card;
  }
  public get_selected_item(){
    console.log(this.selected_Character)
    return this.selected_Character;
  }

}
