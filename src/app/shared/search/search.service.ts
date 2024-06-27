import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  url="https://api.jikan.moe/v4/anime"
  page:number=1;//for the page
  limit:number=12;//the no of post shon per pagew
  q="";//for the query
  type="";//type of the "tv" "movie" "ova" "special" "ona" "music" "cm" "pv" "tv_special"
  rating="";// u/a rating
  status=""; // if the its complete, upcoming,airing
  constructor(private http:HttpClient) {}

  getApiData(){
    const custom_url=`${this.url}?limit=${this.limit}&page=${this.page}&q=${this.q}&type=${this.type}&rating=${this.rating}&status=${this.status}`;
    return this.http.get(custom_url).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }


  public selected_item:any;
  public set_selected_Item(item:any){//getting the details of the item / card when clicked 
    this.selected_item =item;
    console.log(this.selected_item);
  }

  // public get_selected_item_data(){
  //   return this.selected_item;
  //   console.log(this.selected_item);
  // }
}
