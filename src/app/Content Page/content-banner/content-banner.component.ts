import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../../shared/search/search.service';
import { Data1Interface } from '../../data1-interface';
import { SelectedhCardInterface } from '../../shared/search/selectedh-card-interface';

@Component({
  selector: 'app-content-banner',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './content-banner.component.html',
  styleUrls: ['./content-banner.component.css'],
})
export class ContentBannerComponent implements OnInit {
  @Input() item?: Data1Interface;
  @Input() selected_card_data?:SelectedhCardInterface;

  constructor(private _movieService?: MoviesService) {
    // console.log('this is content banner');
  }

  ngOnInit(): void {
    console.log(this.item); // should work now
    console.log("this is the slectsd card",this.selected_card_data)
  }
  // item = data1[1];
  ngAfterViewOnInit(){}

}
