import { Component, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Imgdata } from '../imgdata';
import { CommonModule } from '@angular/common';
import { data1 } from '../../../../data1';import { Route } from '@angular/router';
import { Router } from '@angular/router';
 ''
@Component({
  selector: 'app-railer',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './railer.component.html',
  styleUrls: ['./railer.component.css']
})
export class RailerComponent implements AfterViewInit {

  constructor(private router:Router){

  }
movetonext(arg0: number) {
  this.router.navigate(['/s']);
}


  item = data1;
  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;
  @Output() railerData1 = new EventEmitter<Imgdata>();

  ngAfterViewInit() {}

  emitImage(image: Imgdata) {
    this.railerData1.emit(image);
  }



  prevfun() {
    if (this.prevButtonRef) {
      const elm = this.prevButtonRef.nativeElement.parentElement?.children[1];
      const item = elm?.getElementsByClassName("images")[0];
      if (item) {
        item.classList.add('slide-animation'); 
        elm?.append(item);
      }
    }
  }

  nextfun() {
    if (this.nextButtonRef) {
      const elm2 = this.nextButtonRef.nativeElement.parentElement?.children[1];
      const item = elm2?.getElementsByClassName("images");
      if (item) {
        elm2?.prepend(item[item.length - 1]);
        item[item.length - 1].classList.add('slide-animation2'); 
      }
    }
  }
}
