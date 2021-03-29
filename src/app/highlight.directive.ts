import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(public elem: ElementRef) {
    elem.nativeElement.style.backgroundColor = 'gold';
  }
}
