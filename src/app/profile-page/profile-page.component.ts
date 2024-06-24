import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NoOfUsersComponent } from './no-of-users/no-of-users.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { Data1Interface } from '../data1-interface';
import { FormsModule } from '@angular/forms';
import { Data1Service } from '../shared/data1.service';
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
export class ProfilePageComponent {

  constructor(private data: Data1Service, private userData: UserPDataService,private watchData:WatchListService) {}

  phone = 7536352352;
  name = 'rgsrgrgsg';
  email = 'aeffs@gmail.com';
  DOB = '2002-11-16';
  id=1;
  img="/Doraemon.jpeg"

  public user_Personal_Data: UserPData[] = this.userData.getPorfileData();

  public data1: WatchListInterface[] = this.watchData.getWatchList();

  public returned_Data(data:UserPData){
    this.phone=data.phone;
    this.name= data.name;
    this.email=data.email;
    this.DOB =data.DOB;
    this.id = data.userId;
    this.img = data.profile_img;
    console.log(this.id);
  }

  getingID(emittedID: number) {
    this.id = emittedID;
    }

}
