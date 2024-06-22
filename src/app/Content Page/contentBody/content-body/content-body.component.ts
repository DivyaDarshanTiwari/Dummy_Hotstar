import { Component, Input } from '@angular/core';
import {MatTabsModule,MatTabGroup,} from '@angular/material/tabs';
import { JsonPipe, NgFor } from '@angular/common';
import { SeasonBodyComponent } from '../season-body/season-body.component';
import { MoreLikeThisComponent } from '../more-like-this/more-like-this.component';

@Component({
    selector: 'app-content-body',
    standalone: true,
    templateUrl: './content-body.component.html',
    styleUrl: './content-body.component.css',
    imports: [MatTabsModule, MatTabGroup, NgFor, SeasonBodyComponent, MoreLikeThisComponent,JsonPipe]
})
export class ContentBodyComponent {

  @Input() item!: any;

  seasonData!:any;
  moreLikeData!:any;

  catch_season_data(data:any){
    console.log(data);
    this.seasonData = data
  }

  catch_more_like_this_data(data:any)
  {
    console.log(data);
    this.moreLikeData=data;
  }
}
