import { Injectable } from '@angular/core';

type second_watch_list = {
  loaction: string;
  item_id: number;
  user_id: number;
  selected: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class WatchListService {
  protected selected_user_id!: number;

  protected selected_user_watched_list: second_watch_list[] = [];
  constructor() {
    const second_watch_list = localStorage.getItem('Sec_watch_list');
    const users = localStorage.getItem('Profile_Data');
    if (second_watch_list) {
      this.selected_user_watched_list = JSON.parse(second_watch_list);
    } else {
      console.log('watch list not present');
    }
    if (users) {
      let activeUser = JSON.parse(users);
      activeUser = activeUser.find((value: any) => value.Active == true);
      if (activeUser) {
        this.selected_user_id = activeUser.userId;
      } else {
        console.log('No active user found');
      }
    }
  }

  public getSecond_WatchList(): second_watch_list[] {
    return this.selected_user_watched_list;
  }

  public set_Selected_id(id: number) {
    this.selected_user_id = id;
  }
  public get_Selected_id(): number {
    return this.selected_user_id;
  }

  public set_watch_list(loaction: string, item_id: number, include: boolean) {
    let x = {
      loaction: loaction,
      item_id: item_id,
      user_id: this.selected_user_id,
      selected: include,
    };
    if (include) {
      let t_f: boolean = false;
        // for (let i = 0; i < this.selected_user_watched_list.length; i++) {
        //   /**
        //    * @description to check repeated element
        //    */
        //   if (
        //     this.selected_user_watched_list[i].item_id == x.item_id &&
        //     this.selected_user_watched_list[i].user_id == x.user_id &&
        //     this.selected_user_watched_list[i].loaction == loaction
        //   ) {
        //     t_f = true;
        //   }
        // }
        t_f = this.selected_user_watched_list.some((value)=>{
            return value.item_id == x.item_id && value.user_id == x.user_id && value.loaction == loaction
        })
        console.log(t_f);
      if (!t_f) {
        this.selected_user_watched_list.push(x);
        console.log(this.selected_user_watched_list);
        this.save();
      }
    } else {
      /**
       * @description if the unwishlisted element is not same int value added to the next
       */
        console.log('api delete');
        let count = 0;
        let new_arr: any[] = [];
        this.selected_user_watched_list = this.selected_user_watched_list.filter((value)=>{
          return value.loaction !== loaction || value.item_id !== x.item_id || value.user_id !== x.user_id
        })
      console.log('api', this.selected_user_watched_list);
      this.save();
    }
  }

  private save() {
    localStorage.setItem(
      'Sec_watch_list',
      JSON.stringify(this.selected_user_watched_list)
    );
  }
}
