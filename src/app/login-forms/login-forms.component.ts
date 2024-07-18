import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../shared/Login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-forms.component.html',
  styleUrl: './login-forms.component.css',
})
export class LoginFormsComponent implements OnInit {
  constructor(private login_service: LoginService, private route: Router) {}
  private data: any;
  private password!: string;
  private user_name!: string;
  protected wrong_pass: boolean = false;
  protected wrong_user: boolean = false;
  ngOnInit(): void {
    this.getdata();
    this.route.navigateByUrl('profile');
  }
  applyform = new FormGroup({
    user_name: new FormControl(''),
    password: new FormControl(''),
  });

  getdata() {
    this.data = this.login_service.getData();
  }

  submitApplication() {
    this.login_service.getData();
    this.password = this.applyform.value.password ?? '';
    this.user_name = this.applyform.value.user_name ?? '';
    let filter = this.data.find(
      (value: any) => value.user == this.user_name
    );
    if (filter) {
      this.wrong_user = false
      if (filter.password == this.password) {
        this.wrong_user= false
        this.login_service.logingIn(true);
        this.login_service.save_local(this.user_name,this.password);
        this.route.navigateByUrl('profile');
      } else {
        this.wrong_pass = true;
      }
    } else {
      this.wrong_user = true;
    }
  }
}
