import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewComponent } from '../Content Page/new/new.component';
import { data1 } from '../../data1';
import { Data1Interface } from '../data1-interface';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { SearchComponent } from '../search/search.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  { path: 's/:id', component: NewComponent },
  {path: 'profile', component:ProfilePageComponent},
  {path: 'Search', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { 
  data:Data1Interface[] = data1;
}
