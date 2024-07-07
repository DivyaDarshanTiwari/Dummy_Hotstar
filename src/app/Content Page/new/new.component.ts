import { Component, OnInit, SimpleChanges, inject } from '@angular/core';
import { ContentBodyComponent } from '../contentBody/content-body.component';
import { ContentBannerComponent } from '../content-banner/content-banner.component';
import { Data1Service } from '../../shared/data1.service';
import { NgFor } from '@angular/common';
import { type Data1Interface } from '../../data1-interface';
import { MoviesService } from '../../shared/search/search.service'; //api
import { SelectedhCardInterface } from '../../shared/search/selectedh-card-interface';
import { CharactersService } from '../../shared/Characters/characters.service';
import { CharaterInterface } from '../../shared/Characters/charater-interface';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ContentBodyComponent, ContentBannerComponent, NgFor],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  constructor(
    private data1Service: Data1Service,//instance of the data1 service
    private _movieService: MoviesService,//instance of the search.ervice.ts which contiain the MovieService
    private _charactedService:CharactersService
  ) {}
  data1: Data1Interface |null = this.data1Service.get_item();
  selected_card_data?: SelectedhCardInterface | null;
  selected_character?: CharaterInterface | null;
  ngOnInit(): void {
    this.data1 = this.data1Service.get_item(); //getting  that data from the selected Item on the rails with help of function in service
    console.log('3 inside the ngOninit of the new componot');
    this._Seleted_card();
    this._selected_character_fun();
  }
  _Seleted_card() {
    this.selected_card_data = this._movieService.get_selected_item_data();
    console.log(' 5 value assigned in new component', this.selected_card_data);
  }

  _selected_character_fun(){
    this.selected_character = this._charactedService.get_selected_item();
  }
}
