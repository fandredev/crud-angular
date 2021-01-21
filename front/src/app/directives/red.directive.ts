import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]' // footer.component.html
})
export class RedDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#e35e6b'
  }

}
