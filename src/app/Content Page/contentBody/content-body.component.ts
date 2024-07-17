import { Component, Input } from '@angular/core';
import {MatTabsModule,MatTabGroup,} from '@angular/material/tabs';
import { JsonPipe, NgFor } from '@angular/common';
import { SeasonBodyComponent } from './season-body/season-body.component';
import { MoreLikeThisComponent } from './more-like-this/more-like-this.component';
import { Data1Interface } from '../../data1-interface';
import { SeasonInterface } from './season-body/season-interface';
import { MoreLikeThisInterface } from './more-like-this/more-like-this-interface';

@Component({
    selector: 'app-content-body',
    standalone: true,
    templateUrl: './content-body.component.html',
    styleUrl: './content-body.component.css',
    imports: [MatTabsModule, MatTabGroup, NgFor, SeasonBodyComponent, MoreLikeThisComponent,JsonPipe]
})
export class ContentBodyComponent {

  @Input() item!: Data1Interface | null;

  seasonData!:SeasonInterface;
  moreLikeData!:MoreLikeThisInterface;

  catch_season_data(data:SeasonInterface){
    this.seasonData = data
  }

  catch_more_like_this_data(data:MoreLikeThisInterface)
  {
    this.moreLikeData=data;
  }
}
