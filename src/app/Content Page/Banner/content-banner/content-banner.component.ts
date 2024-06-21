import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-content-banner',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './content-banner.component.html',
  styleUrl: './content-banner.component.css'
})
export class ContentBannerComponent {

}
