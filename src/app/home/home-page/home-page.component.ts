import { Component } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';



@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    imports: [HeroBannerComponent]
})
export class HomePageComponent {

}
