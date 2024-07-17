import { Injectable } from '@angular/core';

type second_watch_list = {
  loaction: string,
  item_id: number,
  user_id: number,
  selected: boolean
}

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
    }
    if (users) {
      let activeUser = JSON.parse(users);
      activeUser = activeUser.find((value: any) => value.Active == true);
      if (activeUser) {
        console.log('Active User:', activeUser);
        this.selected_user_id = activeUser.userId;
        console.log(this.selected_user_id);
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
      if (loaction == 'api') {
        console.log('api push');
        for (let i = 0; i < this.selected_user_watched_list.length; i++) {
          if (
            this.selected_user_watched_list[i].item_id == x.item_id &&
            this.selected_user_watched_list[i].user_id == x.user_id
          ) {
            t_f = true;
          }
        }
      } else {
        console.log('local push');
        for (let i = 0; i < this.selected_user_watched_list.length; i++) {
          if (
            this.selected_user_watched_list[i].item_id == x.item_id &&
            this.selected_user_watched_list[i].user_id == x.user_id
          ) {
            t_f = true;
          }
        }
      }
      if (!t_f) {
        this.selected_user_watched_list.push(x);
        console.log(this.selected_user_watched_list);
        this.save();
      }
    } else {
      if (loaction === 'api') {
        console.log('api delete');
        let count = 0;
        let new_arr: any[] = [];
        for (let i = 0; i < this.selected_user_watched_list.length; i++) {
          if (
            this.selected_user_watched_list[i].user_id !=
              this.selected_user_id &&
            item_id == this.selected_user_watched_list[i].item_id
          ) {
            new_arr[count] = this.selected_user_watched_list[i];
            count++;
          } else {
            if (item_id != this.selected_user_watched_list[i].item_id) {
              new_arr[count] = this.selected_user_watched_list[i];
              count++;
            }
          }
        }
        this.selected_user_watched_list = new_arr;
        console.log('api', this.selected_user_watched_list);
        this.save();
      } else {
        console.log('local delete');
        let count = 0;
        let new_arr: any[] = [];
        for (let i = 0; i < this.selected_user_watched_list.length; i++) {
          if (
            this.selected_user_watched_list[i].user_id !=
              this.selected_user_id &&
            item_id == this.selected_user_watched_list[i].item_id
          ) {
            new_arr[count] = this.selected_user_watched_list[i];
            count++;
          } else {
            if (item_id != this.selected_user_watched_list[i].item_id) {
              new_arr[count] = this.selected_user_watched_list[i];
              count++;
            }
          }
        }
        this.selected_user_watched_list = new_arr;
        console.log('api', this.selected_user_watched_list);
        this.save();
      }
    }
  }

  private save() {
    localStorage.setItem(
      'Sec_watch_list',
      JSON.stringify(this.selected_user_watched_list)
    );
  }
}
