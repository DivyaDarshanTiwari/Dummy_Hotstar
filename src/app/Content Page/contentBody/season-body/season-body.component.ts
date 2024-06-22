import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { seasonData } from '../Season Body/seasonData.1';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-season-body',
  standalone: true,
  imports: [MatCardModule,MatProgressBarModule,MatCardModule,MatChipsModule,SeasonBodyComponent ,CommonModule],
  templateUrl: './season-body.component.html',
  styleUrl: './season-body.component.css'
})
export class SeasonBodyComponent implements OnInit{

  @Output() senddata = new EventEmitter();

  ngOnInit(): void {
    this.senddata.emit(this.data)
  }



  data=seasonData;


}
