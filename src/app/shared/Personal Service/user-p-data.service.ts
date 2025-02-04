import { Injectable } from '@angular/core';
import { type UserPData } from './user-p-data.interface';

@Injectable({
  providedIn: 'root',
})
export class UserPDataService {
  userData: UserPData[] = [
    {
      userId: 1,
      phone: 7536352352,
      name: 'rgsrgrgsg',
      email: 'aeffs@gmail.com',
      DOB: '16-11-2002',
      profile_img: '/ANIME-W (1).gif',
      watchListId: 1,
      Active: true,
    },
    {
      userId: 2,
      phone: 9856478921,
      name: 'John Doe',
      email: 'johndoe@example.com',
      DOB: '25-07-1995',
      profile_img: '/ANIME-W (1).gif',
      watchListId: 2,
      Active: false,
    },
    {
      userId: 3,
      phone: 6543210987,
      name: 'Jane Smith',
      email: 'janesmith@hotmail.com',
      DOB: '12-03-1990',
      profile_img: '/ANIME-W (2).gif',
      watchListId: 3,
      Active: false,
    },
    {
      userId: 4,
      phone: 3214567890,
      name: 'Bob Johnson',
      email: 'bobjohnson@yahoo.com',
      DOB: '01-01-1980',
      profile_img: '/Doraemon.jpeg',
      watchListId: 4,
      Active: false,
    },
    {
      userId: 5,
      phone: 9876543210,
      name: 'Alice Brown',
      email: 'alicebrown@aol.com',
      DOB: '28-02-1992',
      profile_img: '/welcome.jpeg',
      watchListId: 5,
      Active: false,
    },
  ];

  private selected_user!: UserPData;

  constructor() {
    const profile_data = localStorage.getItem('Profile_Data');
    if (profile_data) {
      this.userData = JSON.parse(profile_data);
    } else {
      let x = this.userData.find((value) => value.Active === true);
      if (x) {
        this.selected_user = x;
      }
    }
  }

  public getPorfileData() {
    // the data is accessed using this function
    return this.userData;
  }

  public get_Actived_data() {
    // the data that is currently active is given by this
    return this.userData.find((data) => data.Active == true);
  }

  public set_Actived_data(activeid: number) {
    // the current selected id is activated
    let data_to_be_set_activated = this.userData.find(
      (data) => activeid == data.userId
    );
    data_to_be_set_activated!.Active = true;
    this.saveData();
  }

  public set_Deactive_data(prev_active_id: number) {
    //the previos selected id will be deactivated
    let data_to_be_deactivated = this.userData.find(
      (data) => prev_active_id == data.userId
    );
    data_to_be_deactivated!.Active = false;
    this.saveData();
  }

  // public putProfileData(data: UserPData, id: number) {
  //   // this willl be used for the form updation
  //   let particularUserData = this.userData.find((data) => data.userId == id);
  //   if (particularUserData) {
  //     particularUserData.DOB = data.DOB;
  //     particularUserData.email = data.email;
  //     particularUserData.name = data.name;
  //     particularUserData.phone = data.phone;
  //     particularUserData.userId = data.userId;
  //     particularUserData.watchListId = data.watchListId;
  //   } else {
  //     this.userData.push(data);
  //   }
  //   this.saveData();
  // }

  // putData(data: UserPData) {
  //   // this is to puch new user to the profile
  //   this.userData.push(data);
  //   this.saveData;
  // }
  private saveData() {
    // it is used to save data in th browser still have not used
    localStorage.setItem('Profile_Data', JSON.stringify(this.userData));
  }
}
