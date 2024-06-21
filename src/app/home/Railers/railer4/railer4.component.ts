import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Imgdata } from '../imgdata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-railer4',
  standalone: true,
  imports: [MatIcon,CommonModule],
  templateUrl: './railer4.component.html',
  styleUrl: './railer4.component.css'
})
export class Railer4Component implements AfterViewInit {

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

  public image:Imgdata[]=[
    {
      id:300,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s',
      alt: 'Dog'
    },
    {
      id:301,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxljCiU3pRUXpw-39aklTNk7BDV3G9Dn7ocw&s',
      alt: 'Dog'
    },
    {
      id:302,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGxx1DUJNuxRai0IV8G04TKWCpkcmRlkRhA&s',
      alt: 'Dog'
    },
    {
      id:303,
      img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t',
      alt: 'Dog'
    },
    {
      id:304,
      img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t',
      alt: 'Dog'
    },
    {
      id:305,
      img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t',
      alt: 'Dog'
    },
    {
      id:306,
      img: 'https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2965/1717524622965-t',
      alt: 'Dog'
    }
    ];

}
