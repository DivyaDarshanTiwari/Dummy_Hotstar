import { Component, Input, OnInit } from '@angular/core';
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
  constructor(private watchList_Service: WatchListService) {}

  // data comming from the new component
  @Input({ required: true }) item?: Data1Interface | null;
  @Input({ required: true }) selected_card_data?: SelectedhCardInterface | null;
  @Input({ required: true }) selected_character?: CharaterInterface | null;
  private selected_user_id?: number;

  protected add_to_watchList: boolean = false;

  ngOnInit(): void {
    this.selected_user_id = this.watchList_Service.get_Selected_id();
    let x = [];
    let z = this.watchList_Service.getSecond_WatchList();
    for (let i = 0; i < z.length; i++) {
      if (z[i].loaction == 'api') {
        if (z[i].item_id == this.selected_card_data?.mal_id) {
          x.push(z[i]);
        }
      } else {
        if (z[i].item_id == this.item?.id) {
          x.push(z[i]);
        }
      }
    }
    x = x.filter((value) => this.selected_user_id == value.user_id);
    if (x.length) {
      this.add_to_watchList = true;
      console.log(this.add_to_watchList);
    }
  }
  // item = data1[1];

  watchList(location: string, item: any) {
    if (this.add_to_watchList === true) {
      this.add_to_watchList = false;
      if (location == 'api') {
        this.watchList_Service.set_watch_list(
          location,
          item.mal_id,
          this.add_to_watchList
        );
      } else {
        this.watchList_Service.set_watch_list(
          location,
          item.id,
          this.add_to_watchList
        );
      }
    } else {
      this.add_to_watchList = true;
      if (location == 'api') {
        this.watchList_Service.set_watch_list(
          location,
          item.mal_id,
          this.add_to_watchList
        );
      } else {
        this.watchList_Service.set_watch_list(
          location,
          item.id,
          this.add_to_watchList
        );
      }
    }
  }
}
