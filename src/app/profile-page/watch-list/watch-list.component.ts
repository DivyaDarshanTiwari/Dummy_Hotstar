import { Component, Input, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ConvertTitleLengthPipe } from '../../PIPES/Covert Title Lenght/convert-title-length.pipe';
import watch_list from '../../JSON/watch_list.json'


@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,ConvertTitleLengthPipe],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent implements OnInit {
  ngOnInit(): void {
    console.warn('watch',this.watchList_accord)
  }
  @Input({required:true}) id?:number;
  @Input({required:true}) second_watchList: any;

  get watch_acc_userID(){
    return watch_list.watch_list.filter((data)=> data.user_id == this.id) 
  }
  get watchList_accord(){
    return this.second_watchList.filter((data:any)=> data.user_id == this.id)
  }
}
