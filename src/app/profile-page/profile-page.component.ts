import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { NoOfUsersComponent } from './no-of-users/no-of-users.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { Data1Interface } from '../data1-interface';
import { data1 } from '../../data1';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatDivider,NoOfUsersComponent,WatchListComponent,FormsModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  public data1:Data1Interface[]=data1;

  phone=7536352352;
  name="rgsrgrgsg";
  email="aeffs@gmail.com"
  DOB = "16-11-2002"
}
