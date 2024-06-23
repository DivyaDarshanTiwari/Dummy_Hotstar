import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { MainRailerComponent } from '../Railers/main-railer/main-railer.component';
import { Imgdata } from '../Railers/imgdata';
import { data1 } from '../../../data1';
import { Data1Interface } from '../../data1-interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [HeroBannerComponent, MainRailerComponent],
})
export class HomePageComponent {
  data1:Data1Interface[] = data1;
  catchData(item: Imgdata) {
    console.log(item);
    console.log('he');
  }
}
