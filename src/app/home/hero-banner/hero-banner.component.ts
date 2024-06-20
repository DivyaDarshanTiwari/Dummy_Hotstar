import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
    selector: 'app-hero-banner',
    standalone: true,
    templateUrl: './hero-banner.component.html',
    styleUrl: './hero-banner.component.css',
    imports: [MatButtonModule, MatIconModule]
})
export class HeroBannerComponent {

}
