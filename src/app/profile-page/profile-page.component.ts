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
  constructor(private data: Data1Service, private userData: UserPDataService) {}

  phone = 7536352352;
  name = 'rgsrgrgsg';
  email = 'aeffs@gmail.com';
  DOB = '16-11-2002';

  public user_Personal_Data: UserPData[] = this.userData.getPorfileData();

  public data1: Data1Interface[] = this.data.getData1();

  public returned_Data(data:UserPData){
    this.phone=data.phone;
    this.name= data.name;
    this.email=data.email;
    this.DOB =data.DOB;
  }

}
