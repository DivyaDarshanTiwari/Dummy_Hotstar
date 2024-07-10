import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewComponent } from '../Content Page/new/new.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 's', component: NewComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'Search', loadChildren:()=> import("../search/search-route/search-route.module").then(m => m.SearchRouteModule)},
  { path: 'characters', loadChildren:()=> import("../charaters/charaters-route/charaters-route.module").then(m=> m.CharatersRouteModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
