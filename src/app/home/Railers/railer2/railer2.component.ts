import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Imgdata } from '../imgdata';
import { CommonModule } from '@angular/common';
import { data1 } from '../../../../data1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-railer2',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './railer2.component.html',
  styleUrl: './railer2.component.css',
})
export class Railer2Component implements AfterViewInit {
  item = data1;

  constructor(private router: Router) {}
  movetonext(arg0: number) {
    this.router.navigate(['/s']);
  }

  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;

  @Output() railerData1 = new EventEmitter<Imgdata>();
  emitImage(image: Imgdata) {
    this.railerData1.emit(image);
  }

  ngAfterViewInit() {}
  prevfun() {
    if (this.prevButtonRef) {
      // Update slider UI based on new currentSlideIndex
      var elm = this.prevButtonRef.nativeElement.parentElement?.children[1];
      console.log(elm);
      var item = elm?.getElementsByClassName('images')[0] ?? null;
      console.log(item);
      if (item) {
        item.classList.add('slide-animation');
        elm?.append(item);
      }
    }
  }

  nextfun() {
    if (this.nextButtonRef) {
      var elm2 = this.nextButtonRef.nativeElement.parentElement?.children[1];
      console.log(elm2);

      var item = elm2?.getElementsByClassName('images') ?? null;
      console.log(item);

      if (item) {
        elm2?.prepend(item[item.length - 1]);
        item[item.length - 1].classList.add('slide-animation2');
      }
    }
  }
}
