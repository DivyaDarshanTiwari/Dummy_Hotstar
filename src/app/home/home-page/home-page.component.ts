import { Component } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { RailerComponent } from '../railer/railer.component';



@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    imports: [HeroBannerComponent,RailerComponent]
})
export class HomePageComponent {

}
