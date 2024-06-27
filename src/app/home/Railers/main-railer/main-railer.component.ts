import { Component ,EventEmitter,Input,Output} from '@angular/core';
import { Railer2Component } from '../railer2/railer2.component';
import { Railer3Component } from '../railer3/railer3.component';
import { Railer4Component } from '../railer4/railer4.component';
import { RailerComponent } from '../railer/railer.component';
import { type Imgdata } from '../imgdata';
import { Data1Interface } from '../../../data1-interface';

@Component({
  selector: 'app-main-railer',
  standalone: true,
  imports: [Railer2Component, Railer3Component, Railer4Component, RailerComponent],
  templateUrl: './main-railer.component.html',
  styleUrls: ['./main-railer.component.css']
})
export class MainRailerComponent {

  @Output() imageData = new EventEmitter<Data1Interface>();

  @Input() data_from_home!:Data1Interface[];

  railerData(item: Data1Interface) {    console.log("MAIN RAILER")
    this.imageData.emit(item);
  }
}
