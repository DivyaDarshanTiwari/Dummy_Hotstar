import { Component, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Imgdata } from '../imgdata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-railer',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './railer.component.html',
  styleUrls: ['./railer.component.css']
})
export class RailerComponent implements AfterViewInit {
  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;
  @Output() railerData1 = new EventEmitter<Imgdata>();

  public image: Imgdata[] = [
    { id: 100, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s', alt: 'Dog' },
    { id: 101, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxljCiU3pRUXpw-39aklTNk7BDV3G9Dn7ocw&s', alt: 'Dog' },
    { id: 102, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxx1DUJNuxRai0IV8G04TKWCpkcmRlkRhA&s', alt: 'Dog' },
    { id: 103, img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t', alt: 'Dog' },
    { id: 104, img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t', alt: 'Dog' },
    { id: 105, img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t', alt: 'Dog' },
    { id: 106, img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t', alt: 'Dog' }
  ];

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
