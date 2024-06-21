import { Component } from '@angular/core';
import { ContentBannerComponent } from '../../Banner/content-banner/content-banner.component';
import { ContentBodyComponent } from '../../contentBody/content-body/content-body.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ContentBannerComponent,ContentBodyComponent],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css'
})
export class NewComponent {

}
