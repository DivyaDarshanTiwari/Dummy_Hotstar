import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:3000/user_data';
  isLoggedIn = false;

  constructor(private http: HttpClient, private route:Router) {}

  public getData(): Observable<any> | null {
    if (this.url) {
      return this.http.get(this.url);
    } else {
      console.error('Url not found');
      return null;
    }
  }

  public submit(user_name: string, password: string , email:string): void {
    if (user_name && password && email) {
      console.log(user_name, password, email);
      this.http.post(this.url, { user: user_name, password: password , email:email})
        .subscribe((response) => {
          console.log(response);
          this.isLoggedIn= true;
          this.route.navigateByUrl('profile');
        }, (error) => {
          console.error(error);
        });
    } else {
      alert("Enter both the details");
    }
  }
}
