import { Component } from '@angular/core';
import { ContentBodyComponent } from '../../contentBody/content-body/content-body.component';
import { ContentBannerComponent } from '../../Banner/content-banner/content-banner.component';
import { data1 } from '../../../../data1';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ ContentBodyComponent,ContentBannerComponent,NgFor],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  data1=data1[0];
  
}
