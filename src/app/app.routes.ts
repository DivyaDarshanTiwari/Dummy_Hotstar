import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ArrayFindComponent } from './array-find/array-find.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 's',
    loadComponent: () =>
      import('./Content Page/new/new.component').then((m) => m.NewComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile-page/profile-page.component').then(
        (m) => m.ProfilePageComponent
      ),
  },
  {
    path: 'Search',
    loadComponent: () =>
      import('./search/search.component').then((m) => m.SearchComponent),
  },
  {
    path: 'characters',
    loadComponent: () =>
      import('./charaters/charaters.component').then(
        (m) => m.CharatersComponent
      ),
  },
  {
    path: 'array',
    component: ArrayFindComponent
  }
];
