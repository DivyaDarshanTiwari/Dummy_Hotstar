import { Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Data1Interface } from '../../data1-interface';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent {
  @Input() watchList!:Data1Interface[]
}
