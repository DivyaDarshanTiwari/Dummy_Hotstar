import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ArrayFindComponent } from './array-find/array-find.component';
import { loginGuard } from './Authrntication/Login/login.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [loginGuard] },
  {
    path: 's',
    loadComponent: () =>
      import('./Content Page/new/new.component').then((m) => m.NewComponent),
    canActivate: [loginGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login-forms/login-forms.component').then(
        (m) => m.LoginFormsComponent
      ),
  },
  {
    path: 'Search',
    loadComponent: () =>
      import('./search/search.component').then((m) => m.SearchComponent),
    canActivate: [loginGuard],
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./charaters/charaters.component').then(
        (m) => m.CharatersComponent
      ),
    canActivate: [loginGuard],
  },
  {
    path: 'array',
    component: ArrayFindComponent,
  },
  {
    path: 'tv',
    loadComponent: () => import('./tv/tv.component').then((m) => m.TVComponent),
    canActivate: [loginGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile-page/profile-page.component').then(
        (m) => m.ProfilePageComponent
      ),
    canActivate: [loginGuard],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
