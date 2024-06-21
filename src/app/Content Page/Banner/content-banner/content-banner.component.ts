import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {data1} from '../../../../Entertainment'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-content-banner',
  standalone: true,
  imports: [MatButtonModule, MatIconModule,CommonModule],
  templateUrl: './content-banner.component.html',
  styleUrls: ['./content-banner.component.css']
})
export class ContentBannerComponent implements OnInit{

  userid!: {
    id: number;
  };

  item = data1[1]; // not sure what data1 is, but it's not relevant to the route params issue

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userid = {
      id: this.route.snapshot.params['id'],
    };
  }
}
