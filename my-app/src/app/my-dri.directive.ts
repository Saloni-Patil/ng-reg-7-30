import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDri]',
})
export class MyDriDirective {
  // var eleRef = new ElementRef();
  // var eleRef = { };
  // var eleRef = new Object();
  // 7

  constructor(private eleRef: ElementRef) {
    // document.getElementById('myDir').style.color = 'red';
    eleRef.nativeElement.style.color = 'red';
  }
}
