import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NoOfUsersComponent } from './no-of-users/no-of-users.component';
import { WatchListComponent } from './watch-list/watch-list.component';
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
export class ProfilePageComponent implements OnInit{

  constructor( private userData: UserPDataService,private watchData:WatchListService) {}
  ngOnInit(): void {
    this.phone = this.userData.get_Actived_data()!.phone;
    this.name = this.userData.get_Actived_data()!.name;
    this.email = this.userData.get_Actived_data()!.email;
    this.DOB = this.userData.get_Actived_data()!.DOB;
    this.id=this.userData.get_Actived_data()!.userId;
    this.img=this.userData.get_Actived_data()!.profile_img
  }

  phone!:number;
  name !:string;
  email !:string;
  DOB !:string;
  id!:number;
  img!:string

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
