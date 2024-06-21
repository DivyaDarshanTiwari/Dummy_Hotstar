import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NewComponent } from './Content Page/NewComponent/new/new.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    { path: 'new/:id', component: NewComponent }
];
