import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import loginData from '../../JSON/login.json';

type details = {
  user: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:3000/user_data';
  private isLoggedIn = false;
  private user_detail: details = { user: '', password: '' };

  constructor(private http: HttpClient, private route: Router) {
    const local = sessionStorage.getItem('Previous_Logged');
    const details = localStorage.getItem('Details');

    if (local) {
      this.isLoggedIn = JSON.parse(local);
    } else {
      console.warn('not logged before');
    }

    if (details) {
      this.user_detail = JSON.parse(details);
    } else {
      console.warn('No user details found');
    }
  }

  public isLogged(): boolean {
    return this.isLoggedIn;
  }

  // Update persisted session flag when login status changes
  public logingIn(value: boolean) {
    this.isLoggedIn = value;
    sessionStorage.setItem('Previous_Logged', JSON.stringify(this.isLoggedIn));
  }

  public getData() {
    return loginData.user_data;
  }

  // Do not persist plaintext passwords; keep username only (or use a token)
  public save_local(name: string, _password: string) {
    this.user_detail.user = name;
    this.user_detail.password = ''; // avoid storing in localStorage
    if (this.user_detail.user) {
      localStorage.setItem(
        'Details',
        JSON.stringify({ user: this.user_detail.user })
      );
    }
    // If absolutely needed, persist a token instead of the password
  }
}
