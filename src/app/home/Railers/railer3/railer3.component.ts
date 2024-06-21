import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Imgdata } from '../imgdata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-railer3',
  standalone: true,
  imports: [MatIcon,CommonModule],
  templateUrl: './railer3.component.html',
  styleUrl: './railer3.component.css'
})
export class Railer3Component implements AfterViewInit {

  @ViewChild('prevButton') prevButtonRef!: ElementRef<HTMLElement>;
  @ViewChild('nextButton') nextButtonRef!: ElementRef<HTMLElement>;

  @Output() railerData1 = new EventEmitter<Imgdata>();
  emitImage(image: Imgdata) {
    this.railerData1.emit(image);
  }

  ngAfterViewInit() {}

  prevfun() {
    if (this.prevButtonRef) {
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


  public image:Imgdata[]=[
    {
      id:200,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
      alt: 'Dog'
    },
    {
      id:201,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxljCiU3pRUXpw-39aklTNk7BDV3G9Dn7ocw&s',
      alt: 'Dog'
    },
    {
      id:202,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxx1DUJNuxRai0IV8G04TKWCpkcmRlkRhA&s',
      alt: 'Dog'
    },
    {
      id:203,
      img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t',
      alt: 'Dog'
    },
    {
      id:204,
      img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t',
      alt: 'Dog'
    },
    {
      id:205,
      img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t',
      alt: 'Dog'
    },
    {
      id:206,
      img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t',
      alt: 'Dog'
    }
    ];
}
