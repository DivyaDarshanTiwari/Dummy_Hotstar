import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-railer2',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './railer2.component.html',
  styleUrl: './railer2.component.css'
})
export class Railer2Component implements AfterViewInit {
  currentSlideIndex = 0; // Assuming you have an initial slide index

  ngAfterViewInit() {}

  prevfun() {
    if (this.prevButtonRef) {
      this.currentSlideIndex = Math.max(0, this.currentSlideIndex - 1);
      console.log(`Previous button clicked, current slide index: ${this.currentSlideIndex}`);
      // Update slider UI based on new currentSlideIndex
      var elm = this.prevButtonRef.nativeElement.parentElement?.children[1];
      console.log(elm);
      var item = elm?.getElementsByClassName("images")[0] ?? null 
      console.log(item)
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

      var item = elm2?.getElementsByClassName("images") ?? null;
      console.log(item);

      if (item) {
        elm2?.prepend(item[item.length-1]);
        item[item.length-1].classList.add('slide-animation2'); 
      }
    }
  }
  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;
}
