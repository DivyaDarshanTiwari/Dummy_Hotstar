import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { NewComponent } from '../Content Page/new/new.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';
import { SearchComponent } from '../search/search.component';
import { CharatersComponent } from '../charaters/charaters.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 's', component: NewComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'characters', component: CharatersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
