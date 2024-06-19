import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
    selector: 'app-hero-banner',
    standalone: true,
    templateUrl: './hero-banner.component.html',
    styleUrl: './hero-banner.component.css',
    imports: [MatButtonModule, MatDividerModule, MatIconModule, NavbarComponent]
})
export class HeroBannerComponent {

}
