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
    this.login_service.getData()?.subscribe((next) => {
      this.data = next;
      console.log(this.data);
    });
  }

  submitApplication() {
    this.login_service.getData();
    this.password = this.applyform.value.password ?? '';
    this.user_name = this.applyform.value.user_name ?? '';
    let filter = this.data.filter(
      (value: any) => value.user === this.user_name
    );
    if (filter) {
      let find = filter.find((value: any) => value.password === this.password);
      if (find) {
        this.login_service.isLoggedIn = true;
        this.login_service.save_local();
        this.route.navigateByUrl('profile');
      }
      else{
        this.wrong_user=true
      }
    } else {
      this.wrong_pass = true;
    }
  }
}
