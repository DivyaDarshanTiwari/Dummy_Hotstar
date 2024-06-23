import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { MainRailerComponent } from '../Railers/main-railer/main-railer.component';
import { Imgdata } from '../Railers/imgdata';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [HeroBannerComponent, MainRailerComponent],
})
export class HomePageComponent {
  catchData(item: Imgdata) {
    console.log(item);
    console.log('he');
  }
}
