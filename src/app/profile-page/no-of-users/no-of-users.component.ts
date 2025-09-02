import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { UserPData } from '../../shared/Personal Service/user-p-data.interface';
import { UserPDataService } from '../../shared/Personal Service/user-p-data.service';

@Component({
  selector: 'app-no-of-users',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './no-of-users.component.html',
  styleUrl: './no-of-users.component.css',
})
export class NoOfUsersComponent {
  constructor(private userData: UserPDataService) {}

  @Input({ required: true }) user_Personal_Data!: UserPData[];
  @Output() emitter = new EventEmitter<UserPData>();
  @Output() sendingId = new EventEmitter<number>();

  selectedId?: number;

  ngOnChanges() {
    // sync local selectedId with data from parent/service
    const active = this.user_Personal_Data?.find((u) => u.Active);
    this.selectedId = active?.userId;
  }

  select(user: UserPData) {
    this.selectedId = user.userId;
    this.userData.set_Actived_data(user.userId);
    this.emitter.emit(user);
    this.sendingId.emit(user.userId);
  }

  onKey(ev: KeyboardEvent, user: UserPData) {
    if (ev.key === 'Enter' || ev.key === ' ') {
      ev.preventDefault();
      this.select(user);
    }
  }
}
