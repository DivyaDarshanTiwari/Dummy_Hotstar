import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Data1Interface } from '../../../data1-interface';

@Component({
  selector: 'app-railer3',
  standalone: true,
  imports: [MatIcon, CommonModule, RouterLink],
  templateUrl: './railer3.component.html',
  styleUrl: './railer3.component.css',
})
export class Railer3Component {
  @Input() item!: Data1Interface[];

  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;

  @Output() railerData1 = new EventEmitter<Data1Interface>();
  emitImage(image: Data1Interface) {
    this.railerData1.emit(image);
  }

  prevfun() {
    if (this.prevButtonRef) {
      var elm = this.prevButtonRef.nativeElement.parentElement?.children[1];
      var item = elm?.getElementsByClassName('images')[0] ?? null;
      if (item) {
        item.classList.add('slide-animation');
        elm?.append(item);
      }
    }
  }

  nextfun() {
    if (this.nextButtonRef) {
      var elm2 = this.nextButtonRef.nativeElement.parentElement?.children[1];
      var item = elm2?.getElementsByClassName('images') ?? null;
      if (item) {
        elm2?.prepend(item[item.length - 1]);
        item[item.length - 1].classList.add('slide-animation2');
      }
    }
  }
}
