import { Component, ViewChild,ElementRef ,AfterViewInit} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-railer',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './railer.component.html',
  styleUrl: './railer.component.css'
})
export class RailerComponent implements AfterViewInit{
  ngAfterViewInit() {
    if (this.myElementRef) {
      console.log(this.myElementRef.nativeElement); // Access element content
    }
  }
  

  @ViewChild('Prev') myElementRef!: ElementRef<HTMLElement>;
}

