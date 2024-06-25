import { Component, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { type UserPData } from '../../shared/Personal Service/user-p-data.interface';
import { UserPDataService } from '../../shared/Personal Service/user-p-data.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-no-of-users',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './no-of-users.component.html',
  styleUrl: './no-of-users.component.css',
})
export class NoOfUsersComponent {
  constructor(private userData: UserPDataService) {}//dependency injection
  @Output() emitter = new EventEmitter<UserPData>(); // sendind data to the profilepage
  @Output() sendingId = new EventEmitter<number>();
  sending_Selected_p(userData1: UserPData) {//userData1 is comming form the templet which is selected on click
    this.emitter.emit(userData1); //sending user data
    this.userData.set_Actived_data(userData1.userId); // the selected data is being set as active
  }

  @Input({ required: true }) user_Personal_Data!: UserPData[];
}
