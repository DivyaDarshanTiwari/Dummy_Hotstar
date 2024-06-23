import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Data1Interface } from '../../../data1-interface';


@Component({
  selector: 'app-content-banner',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './content-banner.component.html',
  styleUrls: ['./content-banner.component.css']
})
export class ContentBannerComponent  {

  @Input() item!:Data1Interface;

  // item = data1[1];

}