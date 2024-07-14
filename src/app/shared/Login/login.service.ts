import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:3000/user_data';
  isLoggedIn = false;

  constructor(private http: HttpClient, private route: Router) {
    let local = localStorage.getItem('Previous_Logged')
    if(local){
      this.isLoggedIn = JSON.parse(local);
      console.log(this.isLoggedIn);
    }
  }

  public getData(): Observable<any> | null {
    if (this.url) {
      return this.http.get(this.url).pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
    } else {
      console.error('Url not found');
      return null;
    }
  }

  public save_local(){
    localStorage.setItem('Previous_Logged', JSON.stringify(this.isLoggedIn));
  }
}
