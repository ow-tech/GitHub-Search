import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appItalics]'
})
export class ItalicsDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.style='italic'
    this.el.nativeElement.style.color='red'
   }

}
