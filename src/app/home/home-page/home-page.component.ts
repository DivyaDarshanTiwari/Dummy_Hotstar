import { Component } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { NavbarComponent } from "../../navbar/navbar.component";



@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    imports: [HeroBannerComponent, NavbarComponent]
})
export class HomePageComponent {

}
