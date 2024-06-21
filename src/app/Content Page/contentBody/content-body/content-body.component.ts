import { Component } from '@angular/core';
import {MatTabsModule,MatTabGroup,} from '@angular/material/tabs';
import { data1 } from '../../../../Entertainment';
import { NgFor } from '@angular/common';
import { SeasonBodyComponent } from '../Season Body/season-body/season-body.component';

@Component({
  selector: 'app-content-body',
  standalone: true,
  imports: [MatTabsModule,MatTabGroup,NgFor,SeasonBodyComponent],
  templateUrl: './content-body.component.html',
  styleUrl: './content-body.component.css'
})
export class ContentBodyComponent {

  item=data1[0];
}
