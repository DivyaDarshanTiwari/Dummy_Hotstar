import { Component } from '@angular/core';
import { Railer2Component } from '../railer2/railer2.component';
import { Railer3Component } from '../railer3/railer3.component';
import { Railer4Component } from '../railer4/railer4.component';
import { RailerComponent } from '../railer/railer.component';

@Component({
  selector: 'app-main-railer',
  standalone: true,
  imports: [Railer2Component,Railer3Component,Railer4Component,RailerComponent],
  templateUrl: './main-railer.component.html',
  styleUrl: './main-railer.component.css'
})
export class MainRailerComponent {

}
