import { Component } from '@angular/core';
import { HeroBannerComponent } from '../hero-banner/hero-banner.component';
import { RailerComponent } from '../Railers/railer/railer.component';
import { Railer3Component } from '../Railers/railer3/railer3.component';
import { Railer4Component } from '../Railers/railer4/railer4.component';
import { Railer2Component } from '../Railers/railer2/railer2.component';




@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
    imports: [HeroBannerComponent,RailerComponent,Railer3Component,Railer4Component,Railer2Component]
})
export class HomePageComponent {

}
