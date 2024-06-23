import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Imgdata } from '../imgdata';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Data1Interface } from '../../../data1-interface';
@Component({
  selector: 'app-railer',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './railer.component.html',
  styleUrls: ['./railer.component.css'],
})
export class RailerComponent implements AfterViewInit {
  constructor(private router: Router) {}
  movetonext(arg0: number) { //for navigating to dfferent comonent
    this.router.navigate(['/s']);
  }

  @Input()item!:Data1Interface[];
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
      const item = elm?.getElementsByClassName('images')[0];
      if (item) {
        item.classList.add('slide-animation');
        elm?.append(item);
      }
    }
  }

  nextfun() {
    if (this.nextButtonRef) {
      const elm2 = this.nextButtonRef.nativeElement.parentElement?.children[1];
      const item = elm2?.getElementsByClassName('images');
      if (item) {
        elm2?.prepend(item[item.length - 1]);
        item[item.length - 1].classList.add('slide-animation2');
      }
    }
  }
}
