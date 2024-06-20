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
  currentSlideIndex = 0; // Assuming you have an initial slide index

  ngAfterViewInit() {}

  prevfun() {
    if (this.prevButtonRef) {
      // Decrement slide index and handle edge case (if at first slide)
      this.currentSlideIndex = Math.max(0, this.currentSlideIndex - 1);
      console.log(`Previous button clicked, current slide index: ${this.currentSlideIndex}`);
      // Update slider UI based on new currentSlideIndex
      var elm = this.prevButtonRef.nativeElement.parentElement;
      console.log(elm);
    }
  }

  nextfun() {
    if (this.nextButtonRef) {
      // Increment slide index and handle edge case (if at last slide)
      this.currentSlideIndex = Math.min(this.totalSlides - 1, this.currentSlideIndex + 1);
      console.log(`Next button clicked, current slide index: ${this.currentSlideIndex}`);
      // Update slider UI based on new currentSlideIndex
      var elm2 = this.nextButtonRef.nativeElement.parentElement;
      console.log(elm2);
    }
  }

  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;

  // Assuming you have a way to determine the total number of slides
  totalSlides = 7; // Replace with your actual logic
}
