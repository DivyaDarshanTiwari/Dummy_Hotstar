import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../shared/Login/login.service';
@Component({
  selector: 'app-login-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-forms.component.html',
  styleUrl: './login-forms.component.css',
})
export class LoginFormsComponent implements OnInit {
  constructor(private login_service: LoginService ) {}
  private data: any;
  ngOnInit(): void {
    this.getdata();
  }
  applyform = new FormGroup({
    user_name: new FormControl(''),
    password: new FormControl(''),
    email:new FormControl('')
  });

  getdata() {
    this.login_service.getData()?.subscribe((next)=>{
      this.data = next;
      console.log(this.data);
    })
  }
  submitApplication(){
    this.login_service.submit(
      this.applyform.value.user_name ?? '',
      this.applyform.value.password ?? '',
      this.applyform.value.email ?? ''
    )
  }
}
