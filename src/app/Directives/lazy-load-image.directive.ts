import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImage]',
  standalone: true,
})
export class LazyLoadImageDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const load = 'loading' in HTMLImageElement.prototype;

    if (load) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
