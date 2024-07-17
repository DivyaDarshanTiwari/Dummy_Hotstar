import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ConvertTitleLengthPipe } from '../../PIPES/Covert Title Lenght/convert-title-length.pipe';
import watch_list from '../../JSON/watch_list.json';

type second_watch_list = {
  loaction: string;
  item_id: number;
  user_id: number;
  selected: boolean;
};

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, ConvertTitleLengthPipe],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css',
})
export class WatchListComponent implements OnInit {
  protected api_watch_list = watch_list.API_Watch_Data;
  ngOnInit(): void {}
  @Input({ required: true }) id?: number;
  @Input({ required: true }) second_watchList!: second_watch_list[];

  get watch_acc_userID() {
    return watch_list.watch_list.filter((data) => data.user_id == this.id);
  }
  get watchList_accord() {
    let filter_Arr: any[] = [];
    for (let i = 0; i < this.second_watchList.length; i++) {
      if (this.second_watchList[i].loaction == 'api') {
        if (this.second_watchList[i].user_id == this.id) {
          for (let j = 0; j < watch_list.API_Watch_Data.length; j++) {
            if (
              this.second_watchList[i].item_id ==
              watch_list.API_Watch_Data[j].mal_id
            ) {
              filter_Arr.push(watch_list.API_Watch_Data[j]);
            }
          }
        }
      } else {
        if (this.second_watchList[i].user_id == this.id) {
          for (let j = 0; j < watch_list.local_watch_data.length; j++) {
            if (
              this.second_watchList[i].item_id ==
              watch_list.local_watch_data[j].id
            ) {
              filter_Arr.push(watch_list.local_watch_data[j]);
              console.log(filter_Arr);
            }
          }
        }
      }
    }
    return filter_Arr;
  }
}
