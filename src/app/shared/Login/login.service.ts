import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

type details = {
  user: string
  password: string
}


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:3000/user_data';
  private isLoggedIn = false;
  private user_detail: details={
    user: '',
    password: ''
  };

  constructor(private http: HttpClient, private route: Router) {
    let local = sessionStorage.getItem('Previous_Logged')
    let details = localStorage.getItem('Details');
    if(local){
      this.isLoggedIn = JSON.parse(local);
    }else{
      console.warn("not logged before")
    }
    if(details){
      this.user_detail = JSON.parse(details);
    }{
      console.warn("No user details found");
    }
  }

  public isLogged():boolean{
    return this.isLoggedIn;
  }
  public loggingIn(value:boolean){
    this.isLoggedIn = value;
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

  public save_local(name:string, password:string){
    sessionStorage.setItem('Previous_Logged', JSON.stringify(this.isLoggedIn));
    this.user_detail.user = name;
    this.user_detail.password = password;
    if(this.user_detail.user && this.user_detail.password){
      localStorage.setItem('Details',JSON.stringify(this.user_detail))
    }
  }
}
