import { Component } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroBannerComponent],
  templateUrl: './home-page.component.html',
  styleUrls:['./home-page.component.css']
})
export class HomePageComponent {

}
