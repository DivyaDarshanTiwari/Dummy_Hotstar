import { Injectable } from '@angular/core';
import { type WatchListInterface } from './watch-list-interface';
import { SelectedhCardInterface } from '../search/selectedh-card-interface';
import { Data1Interface } from '../../data1-interface';

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  protected selected_user_id?: number;
  watchList = [
    {
      user_id: 1,
      seasons: 5,
      watch_hours: 20,
      img: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpg?r=608',
      title: 'Stranger Things',
    },

    {
      user_id: 2,
      seasons: 8,
      watch_hours: 40,
      img: 'https://static.hbo.com/game-of-thrones-1-1920x1080.jpg',
      title: 'Game of Thrones',
    },
    {
      user_id: 3,
      seasons: 4,
      watch_hours: 20,
      img: 'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQVmi567X7OD4NQqTvxb_K9m4lG1dJ2_ZO9rRP1YsI4uOtHmqsP_W8C_UUbNL8e82YnR2mgdksxCJ4W00gHpmMPwSHVcEApjmreYuNVWIdWqFkWyoj010txqThUIQ9hk8LtQSDpkhPnpiEoKkfxQsxgOYPek.jpg?r=ca3',
      title: 'Vikings',
    },
    {
      user_id: 4,
      seasons: 3,
      watch_hours: 15,
      img: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABdbNydT-iWSdVKFYoDumQjd7F6sVL3SIvrNTeoodmJao2nWA8LBpomSGl84irQ-_AHNZ2zzbNTSvG7f7-V2ae1xBoXcVfJ8cexJa.jpg?r=321',
      title: 'Narcos',
    },
    {
      user_id: 5,
      seasons: 4,
      watch_hours: 25,
      img: 'https://i1.wp.com/media.globalnews.ca/videostatic/289/103/actualnarcos.jpg?w=1040&quality=70&strip=all',
      title: 'Narcos: Mexico',
    },

  ];

  protected selected_watched_list: any[] = [];
  constructor() {
    const watch_Data = localStorage.getItem('Watch_Data');
    const second_watch_list = localStorage.getItem('Sec_watch_list');
    if (watch_Data) {
      this.watchList = JSON.parse(watch_Data);
    }
    if (second_watch_list) {
      this.selected_watched_list = JSON.parse(second_watch_list);
    }
  }

  public getWatchList() {
    return this.watchList;
  }

  public getSecond_WatchList() {
    return this.selected_watched_list;
  }

  public set_Selected_id(user_id: number) {
    this.selected_user_id = user_id;
  }
  public watch_list(loaction: string, item: any, include_remove: boolean) {
    if (include_remove) {
      let x = {
        loaction: loaction,
        item: item,
        user_id: this.selected_user_id,
        selected: include_remove
      };
      if(!this.selected_watched_list.includes(x)){
        this.selected_watched_list.push(x);
        this.save();
      }
    } else {
      if (loaction === 'api') {
        this.selected_watched_list = this.selected_watched_list.filter(
          (value) => value.id != item.mal_id
        );
        console.log(this.selected_watched_list);
        this.save();
      } else {
        this.selected_watched_list = this.selected_watched_list.filter(
          (value) => value.id != item.id
        );
        console.log(this.selected_watched_list);
        this.save();
      }
    }
  }

  private save(){
    localStorage.setItem('Watch_Data',JSON.stringify(this.watchList))
    localStorage.setItem('Sec_watch_list', JSON.stringify(this.selected_watched_list))
  }
}
