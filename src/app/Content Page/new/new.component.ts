import { Component, OnInit, inject } from '@angular/core';
import { ContentBodyComponent } from '../contentBody/content-body.component';
import { ContentBannerComponent } from '../content-banner/content-banner.component';
import { data1 } from '../../../data1';
import { NgFor } from '@angular/common';
import { Data1Interface } from '../../data1-interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ContentBodyComponent, ContentBannerComponent, NgFor],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  route:ActivatedRoute = inject(ActivatedRoute)
  id!:number;
  data1:Data1Interface= data1[this.id];
  constructor(){

  }
  ngOnInit(): void {
    this.id= Number(this.route.snapshot.params['id'])-1;
    console.log(this.id);
    this.data1= data1[this.id];
  }

}
