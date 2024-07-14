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
  ngOnInit(): void {
    this.getdata();
    this.route.navigateByUrl('profile');
  }
  applyform = new FormGroup({
    user_name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
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
    let find = this.data.find((value: any) => value.password == this.password);
    if (find) {
      this.login_service.isLoggedIn = true;
      this.login_service.save_local();
      this.route.navigateByUrl('profile');
    }
  }
}
