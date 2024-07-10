import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharatersComponent } from '../charaters.component';

const routes: Routes = [
  { path: '', component: CharatersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharatersRouteRoutingModule { }
