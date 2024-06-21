import { Component } from '@angular/core';
import { ContentBodyComponent } from '../../contentBody/content-body/content-body.component';
import { ContentBannerComponent } from '../../Banner/content-banner/content-banner.component';



@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ ContentBodyComponent,ContentBannerComponent],
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

}
