import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { seasonData } from './seasonData.1';
import { CommonModule } from '@angular/common';
import { SeasonInterface } from './season-interface';
import { Data1Interface } from '../../../data1-interface';

@Component({
  selector: 'app-season-body',
  standalone: true,
  imports: [MatCardModule,MatProgressBarModule,MatCardModule,MatChipsModule,SeasonBodyComponent ,CommonModule],
  templateUrl: './season-body.component.html',
  styleUrl: './season-body.component.css'
})
export class SeasonBodyComponent implements OnInit{

  @Output() senddata = new EventEmitter();
  @Input({required:true}) itemId!:number;

  ngOnInit(): void {
    this.senddata.emit(this.data)
  }



  data:SeasonInterface[]=seasonData;

  get getEpisodes()
  {
    return this.data.filter(data => data.id === this.itemId);
  }


}
