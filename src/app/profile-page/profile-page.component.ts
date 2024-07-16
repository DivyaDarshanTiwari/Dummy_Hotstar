import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NoOfUsersComponent } from './no-of-users/no-of-users.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { FormsModule } from '@angular/forms';
import { UserPDataService } from '../shared/Personal Service/user-p-data.service';
import { type UserPData } from '../shared/Personal Service/user-p-data.interface';
import { type WatchListInterface } from '../shared/WatchList/watch-list-interface';
import { WatchListService } from '../shared/WatchList/watch-list.service';
@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDivider,
    NoOfUsersComponent,
    WatchListComponent,
    FormsModule,
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css',
})
export class ProfilePageComponent implements OnInit {
  constructor(
    private userData: UserPDataService,//instace of the personal data servise
    private watchData: WatchListService //instance of the watch list data service
  ) {}
  protected phone!: number;
  protected name!: string;
  protected email!: string;
  protected DOB!: string;
  protected id!: number;
  protected img!: string;
  protected Previous_ActiveID!:number;
  ngOnInit(): void {
    // initializing the data with the active userData that was previously selected when the browser was closed
    this.phone = this.userData.get_Actived_data()!.phone;
    this.name = this.userData.get_Actived_data()!.name;
    this.email = this.userData.get_Actived_data()!.email;
    this.DOB = this.userData.get_Actived_data()!.DOB;
    this.id = this.userData.get_Actived_data()!.userId;
    this.img = this.userData.get_Actived_data()!.profile_img;
    this.Previous_ActiveID = this.userData.get_Actived_data()!.userId
  }

  protected user_Personal_Data: UserPData[] = this.userData.getPorfileData();

  protected data1: WatchListInterface[] = this.watchData.getWatchList();

  protected returned_Data(data: UserPData) {
    this.phone = data.phone;
    this.name = data.name;
    this.email = data.email;
    this.DOB = data.DOB;
    this.id = data.userId;
    this.img = data.profile_img;
    this.userData.set_Deactive_data(this.Previous_ActiveID);// the previous key is deactivated here
    this.Previous_ActiveID = data.userId;// the new user profile that is being selected is the set as previous data for the next change of the profile
    this.watchData.set_Selected_id(this.id)// sending id of the selected data to the watchlist service
  }

}
