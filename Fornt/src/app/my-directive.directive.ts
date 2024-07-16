import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef : ElementRef) { 

    this.elementRef.nativeElement.style.backgroundColor = 'yellow';

   }

}
