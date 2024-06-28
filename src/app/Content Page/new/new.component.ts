import { Component, OnInit, SimpleChanges, inject } from '@angular/core';
import { ContentBodyComponent } from '../contentBody/content-body.component';
import { ContentBannerComponent } from '../content-banner/content-banner.component';
import { Data1Service } from '../../shared/data1.service';
import { NgFor } from '@angular/common';
import { type Data1Interface } from '../../data1-interface';
import { MoviesService } from '../../shared/search/search.service'; //api 
import { SelectedhCardInterface } from '../../shared/search/selectedh-card-interface';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ContentBodyComponent, ContentBannerComponent, NgFor],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  data1:Data1Interface= this.data.item;
  selected_card_data?:SelectedhCardInterface;
  constructor(private data:Data1Service, private _movieService:MoviesService){

  }
  ngOnInit(): void {
    this.data1 = this.data.item;
    console.log("3 inside the ngOninit of the new componot");
    this._Seleted_card();
  }
  _Seleted_card(){
    this.selected_card_data= this._movieService.get_selected_item_data();
    console.log( " 5 value assigned in new component",this.selected_card_data);
  }

}
