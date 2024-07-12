import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]',
  standalone: true,
})
export class LazyLoadImageDirective  implements OnInit{
  @Input('appLazyLoadImage') src!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.lazyLoadImage();
  }

  private lazyLoadImage() {
    const imgElement: HTMLImageElement = this.el.nativeElement;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          imgElement.src = this.src;
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(imgElement);
  }
}
