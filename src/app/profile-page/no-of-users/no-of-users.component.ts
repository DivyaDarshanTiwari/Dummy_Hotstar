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
sending_Selected_p(userData:UserPData) {
  this.emitter.emit(userData)
}

  @Input({required:true}) user_Personal_Data!:UserPData[];
  constructor(private userData:UserPDataService){

  }
  // public user_Personal_Data:UserPData[] = this.userData.getPorfileData(); 
}
