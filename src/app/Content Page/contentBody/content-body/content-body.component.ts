import { Component } from '@angular/core';
import {MatTabsModule,MatTabGroup,} from '@angular/material/tabs';

@Component({
  selector: 'app-content-body',
  standalone: true,
  imports: [MatTabsModule,MatTabGroup],
  templateUrl: './content-body.component.html',
  styleUrl: './content-body.component.css'
})
export class ContentBodyComponent {

}
