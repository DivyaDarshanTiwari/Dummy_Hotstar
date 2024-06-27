import { Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { type WatchListInterface } from '../../shared/WatchList/watch-list-interface';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent {
  @Input({required:true}) watchList!:WatchListInterface[]
  @Input() id!:number;

  get watch_acc_userID(){
    return this.watchList.filter((data)=> data.id == this.id)
  }
}
