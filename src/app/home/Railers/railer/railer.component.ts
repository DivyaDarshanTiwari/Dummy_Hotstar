import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-railer',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './railer.component.html',
  styleUrls: ['./railer.component.css']
})
export class RailerComponent implements AfterViewInit {

  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;

  ngAfterViewInit() {}

  prevfun() {
    if (this.prevButtonRef) {
      // Update slider UI based on new currentSlideIndex
      var elm = this.prevButtonRef.nativeElement.parentElement?.children[1];
      var item = elm?.getElementsByClassName("images")[0] ?? null 
      if (item) {
        item.classList.add('slide-animation'); 
        elm?.append(item);
      }
    }
  }

  nextfun() {
    if (this.nextButtonRef) {
       var elm2 = this.nextButtonRef.nativeElement.parentElement?.children[1];
      var item = elm2?.getElementsByClassName("images") ?? null;
      if (item) {
        elm2?.prepend(item[item.length-1]);
        item[item.length-1].classList.add('slide-animation2'); 
      }
    }
  }
}
