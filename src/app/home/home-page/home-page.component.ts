import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { MainRailerComponent } from '../Railers/main-railer/main-railer.component';
import { Data1Service } from '../../shared/data1.service';
import { Data1Interface } from '../../data1-interface';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [HeroBannerComponent, MainRailerComponent],
})
export class HomePageComponent {

  constructor(private data:Data1Service){
  }
  data1:Data1Interface[] = this.data.getData1();
  catchData(item: Data1Interface) {
    this.data.getId(item)
  }
}
