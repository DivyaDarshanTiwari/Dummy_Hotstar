import { CanActivateFn } from '@angular/router';
import { LoginService } from '../../shared/Login/login.service';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router';


export const loginGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
  let isLogged = inject(LoginService)
  let router = inject(Router);
  const protected_url : string[] = ["/profile"]
  return protected_url.includes(state.url) && isLogged.isLoggedIn ? true : router.navigateByUrl('');
};
