import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Data1Interface } from '../../../data1-interface';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-railer3',
  standalone: true,
  imports: [MatIcon, CommonModule, RouterLink, MatTooltip],
  templateUrl: './railer3.component.html',
  styleUrl: './railer3.component.css',
})
export class Railer3Component implements AfterViewInit {
  @Input() item!: Data1Interface[];

  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;

  @Output() railerData1 = new EventEmitter<Data1Interface>();

  private trackEl!: HTMLElement | null;

  ngAfterViewInit(): void {
    // section -> .card-container (second child in markup)
    const section = this.nextButtonRef?.nativeElement
      ?.parentElement as HTMLElement | null;
    this.trackEl = section?.querySelector('.card-container') ?? null;
  }

  emitImage(image: Data1Interface) {
    this.railerData1.emit(image);
  }

  private step(): number {
    if (!this.trackEl) return 0;
    const first = this.trackEl.querySelector('.images') as HTMLElement | null;
    if (!first) return 0;
    const styles = getComputedStyle(this.trackEl);
    const gap = parseFloat(styles.columnGap || styles.gap || '0');
    return first.getBoundingClientRect().width + gap;
  }

  prevfun() {
    if (!this.trackEl) return;
    const s = this.step();
    this.trackEl.scrollTo({
      left: Math.max(0, this.trackEl.scrollLeft - s),
      behavior: 'smooth',
    });
  }

  nextfun() {
    if (!this.trackEl) return;
    const s = this.step();
    const max = this.trackEl.scrollWidth - this.trackEl.clientWidth;
    this.trackEl.scrollTo({
      left: Math.min(max, this.trackEl.scrollLeft + s),
      behavior: 'smooth',
    });
  }
}
