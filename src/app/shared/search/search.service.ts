import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { type SelectedhCardInterface } from './selectedh-card-interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private url = 'https://api.jikan.moe/v4/anime';
  constructor(private http: HttpClient) {}

  getApiData(
    page = 1,
    limit = 12,
    q = '',
    type = '',
    rating = '',
  ) {
    const custom_url = `${this.url}?limit=${limit}&page=${page}&q=${q}&type=${type}&rating=${rating}`;
    return this.http.get(custom_url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  private selected_item?: SelectedhCardInterface;
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
}
