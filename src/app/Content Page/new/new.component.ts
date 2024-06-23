import { Component } from '@angular/core';
import { ContentBodyComponent } from '../contentBody/content-body.component';
import { ContentBannerComponent } from '../content-banner/content-banner.component';
import { data1 } from '../../../data1';
import { NgFor } from '@angular/common';
import { Data1Interface } from '../../data1-interface';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ContentBodyComponent, ContentBannerComponent, NgFor],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent {
  data1:Data1Interface= data1[0];
}
