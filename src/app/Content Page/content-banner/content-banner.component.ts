import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Data1Interface } from '../../data1-interface';
import { SelectedhCardInterface } from '../../shared/search/selectedh-card-interface';
import { CharaterInterface } from '../../shared/Characters/charater-interface';
import { WatchListService } from '../../shared/WatchList/watch-list.service';
import { LoginService } from '../../shared/Login/login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content-banner',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule, RouterLink],
  templateUrl: './content-banner.component.html',
  styleUrls: ['./content-banner.component.css'],
})
export class ContentBannerComponent implements OnInit {
  constructor(
    private watchList_Service: WatchListService,
    private loginService: LoginService,
    private router: Router
  ) {}

  // data comming from the new component
  @Input({ required: true }) item?: Data1Interface | null;
  @Input({ required: true }) selected_card_data?: SelectedhCardInterface | null;
  @Input({ required: true }) selected_character?: CharaterInterface | null;
  private selected_user_id?: number;

  protected add_to_watchList: boolean = false;

  ngOnInit(): void {
    if (this.loginService.isLogged()) {
      this.selected_user_id = this.watchList_Service.get_Selected_id();
      let x = this.watchList_Service.getSecond_WatchList();
      let z = this.watchList_Service.getSecond_WatchList();
      /**
       * @description seeing the initial loading if dat is in wishlist
       */
      z = z.filter((value) => {
        return (
          value.loaction == 'api' &&
          value.item_id == this.selected_card_data?.mal_id &&
          this.selected_user_id == value.user_id
        );
      });
      if (!z.length) {
        let x = this.watchList_Service.getSecond_WatchList();
        x = x.filter((value) => {
          return (
            value.loaction == 'local' &&
            value.item_id == this.item?.id &&
            this.selected_user_id == value.user_id
          );
        });
      }
      if (z.length || x.length) {
        this.add_to_watchList = true;
        console.log(this.add_to_watchList);
      }
    }
  }

  logIn() {
    if (!this.loginService.isLogged()) {
      this.router.navigateByUrl('login');
    } else {
      console.log('logged in previously');
    }
  }

  watchList(location: string, item: any) {
    if (this.loginService.isLogged()) {
      if (this.add_to_watchList === true) {
        this.add_to_watchList = false;
        /**
         * @description condition used to identify the way item id will be accessed sent
         */
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
}
