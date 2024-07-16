import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Data1Interface } from '../../data1-interface';
import { SelectedhCardInterface } from '../../shared/search/selectedh-card-interface';
import { CharaterInterface } from '../../shared/Characters/charater-interface';
import { WatchListService } from '../../shared/WatchList/watch-list.service';

@Component({
  selector: 'app-content-banner',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './content-banner.component.html',
  styleUrls: ['./content-banner.component.css'],
})
export class ContentBannerComponent implements OnInit {

  constructor(private watchListService:WatchListService){
  }

  // data comming from the new component
  @Input({required: true}) item?: Data1Interface | null;
  @Input({required: true}) selected_card_data?:SelectedhCardInterface | null;
  @Input({required: true}) selected_character?: CharaterInterface | null;

  protected add_to_watchList: boolean = false;


  ngOnInit(): void {
    let contains = this.watchListService.getSecond_WatchList().find((value)=> value.item === this.item || value.item === this.selected_card_data);
    if(contains){
      this.add_to_watchList = true;
    }
  }

  watchList(loaction:string, item:SelectedhCardInterface | Data1Interface) {
    if(this.add_to_watchList === true){
      this.add_to_watchList = false
      this.watchListService.watch_list(loaction,item,this.add_to_watchList)
    }
    else{
      this.add_to_watchList = true
    }
    }

}
