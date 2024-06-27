import { Component, OnInit, inject } from '@angular/core';
import { ContentBodyComponent } from '../contentBody/content-body.component';
import { ContentBannerComponent } from '../content-banner/content-banner.component';
import { Data1Service } from '../../shared/data1.service';
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
  data1:Data1Interface= this.data.item;
  constructor(private data:Data1Service){

  }
  ngOnInit(): void {
    this.data1 = this.data.item;
  }

}
