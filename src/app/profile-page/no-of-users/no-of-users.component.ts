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
  styleUrl: './no-of-users.component.css'
})
export class NoOfUsersComponent {
  @Output() emitter = new EventEmitter<UserPData>()
  @Output() sendingId = new EventEmitter<number>()
 sending_Selected_p(userData:UserPData) {
  this.emitter.emit(userData)
  this.sendingId.emit(userData.userId)
}

  @Input({required:true}) user_Personal_Data!:UserPData[];
  constructor(private userData:UserPDataService){
  }
}
