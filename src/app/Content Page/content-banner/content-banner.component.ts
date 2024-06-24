import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Data1Interface } from '../../data1-interface';


@Component({
  selector: 'app-content-banner',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './content-banner.component.html',
  styleUrls: ['./content-banner.component.css']
})
export class ContentBannerComponent implements OnInit  {

  @Input() item!:Data1Interface;

  constructor() {
    console.log("this is content banner");
  }

  ngOnInit(): void {
    console.log(this.item);
    console.log(this.item.id); // should work now
  }
  // item = data1[1];

}