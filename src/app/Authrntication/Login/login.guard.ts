import { CanActivateFn } from '@angular/router';
import { LoginService } from '../../shared/Login/login.service';
import { inject } from '@angular/core';


export const loginGuard: CanActivateFn = (route, state) => {
  let isLogged = inject(LoginService)
  return isLogged.isLoggedIn;
};
