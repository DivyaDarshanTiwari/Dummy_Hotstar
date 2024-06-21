import { Component } from '@angular/core';
import {MatTabsModule,MatTabGroup,} from '@angular/material/tabs';
import { data1 } from '../../../../Entertainment';
import { NgFor } from '@angular/common';
import { SeasonBodyComponent } from '../Season Body/season-body/season-body.component';
import { MoreLikeThisComponent } from "../More Like This/more-like-this/more-like-this.component";

@Component({
    selector: 'app-content-body',
    standalone: true,
    templateUrl: './content-body.component.html',
    styleUrl: './content-body.component.css',
    imports: [MatTabsModule, MatTabGroup, NgFor, SeasonBodyComponent, MoreLikeThisComponent]
})
export class ContentBodyComponent {

  item=data1[0];
}
