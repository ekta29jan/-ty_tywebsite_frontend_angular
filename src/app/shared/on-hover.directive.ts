import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnHover]'
})
export class OnHoverDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') a() {
    console.log(this.el);
    this.el.nativeElement.classList.push('show');
    console.log(this.el);
  }

  @HostListener('mouseleave') b() {
    // (this.el.nativeElement.className as string).split(" ").
  }

}
