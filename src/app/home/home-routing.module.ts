import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewComponent } from '../Content Page/NewComponent/new/new.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  { path: 's', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
