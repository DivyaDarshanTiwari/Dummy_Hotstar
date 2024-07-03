import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, of, tap, throwError } from 'rxjs';
import { type SelectedhCardInterface } from './selectedh-card-interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url = 'https://api.jikan.moe/v4/anime';
  private visited_url_data: any[] = []; // data is storewd here with the the url
  private selected_item?: SelectedhCardInterface;

  constructor(private http: HttpClient) {}

  public set_selected_Item(item: SelectedhCardInterface) {
    //getting the details of the item / card when clicked
    this.selected_item = item;
    // this.save_On_session();
    console.log('2', this.selected_item);
  }

  public get_selected_item_data() {
    //selceted item data can be accessed from this finction
    console.log('4', this.selected_item);
    return this.selected_item;
  }

  getApiData(page:number, limit:number, q?:string, type?:string, rating?:string) {
    let custom_url = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString())

      if(q){
        custom_url=custom_url.set('q', q);
      }
      if(type){
        custom_url= custom_url.set('type', type);
      }
      if(rating){
        custom_url =custom_url.set('rating', rating);
      }

    if (page && !q && !type && !rating) {//cache
      if (this.visited_url_data.length == 1) {
        return of(this.visited_url_data);
      } else {
        // if not
        this.http.get(this.url, { params: custom_url }).pipe(
          tap((data) => {
            this.visited_url_data.push(data);
          }),
          catchError((error) => {
            return throwError(error);
          })
        );

        return this.http.get(this.url, { params: custom_url }).pipe(
          catchError((error) => {
            return throwError(error);
          })
        );
      }
    } else {
      return this.http.get(this.url, { params: custom_url }).pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
    }
  }
}
