import {
  Component,
  type OnInit,
  type AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginService } from '../shared/Login/login.service';

@Component({
  selector: 'app-login-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.css'],
})
export class LoginFormsComponent implements OnInit, AfterViewInit {
  constructor(
    private login_service: LoginService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  form!: FormGroup<{
    user_name: FormControl<string>;
    password: FormControl<string>;
  }>;
  submitted = false;

  wrong_pass = false;
  wrong_user = false;

  isSubmitting = false;
  showPassword = false;

  private usersData: Array<{ user: string; password: string }> = [];

  @ViewChild('userNameInput', { read: ElementRef })
  userNameEl?: ElementRef<HTMLInputElement>;
  @ViewChild('passwordInput', { read: ElementRef })
  passwordEl?: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    this.usersData = this.login_service.getData() ?? [];
    this.form = this.fb.nonNullable.group({
      user_name: this.fb.nonNullable.control('', [Validators.required]),
      password: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngAfterViewInit(): void {
    this.userNameEl?.nativeElement?.focus();
  }

  get f() {
    return this.form.controls;
  }

  private focusFirstInvalid() {
    if (this.f.user_name.invalid) {
      this.userNameEl?.nativeElement?.focus();
    } else if (this.f.password.invalid) {
      this.passwordEl?.nativeElement?.focus();
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;
    this.wrong_pass = false;
    this.wrong_user = false;

    if (this.form.invalid) {
      this.focusFirstInvalid();
      return;
    }

    this.isSubmitting = true;

    const user_name = this.f.user_name.value.trim();
    const password = this.f.password.value;

    const found = this.usersData.find((u) => u.user === user_name);
    if (!found) {
      this.wrong_user = true;
      this.f.user_name.setErrors({ invalidCredentials: true });
      this.isSubmitting = false;
      this.focusFirstInvalid();
      return;
    }

    if (found.password !== password) {
      this.wrong_pass = true;
      this.f.password.setErrors({ invalidCredentials: true });
      this.isSubmitting = false;
      this.focusFirstInvalid();
      return;
    }

    this.login_service.logingIn(true);
    this.login_service.save_local(user_name, password);

    this.isSubmitting = false;
    this.route.navigateByUrl('profile');
  }
}
