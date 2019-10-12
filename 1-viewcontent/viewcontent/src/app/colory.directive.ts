import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[colory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  @HostBinding('style.color') color = 'red';

  // @HostListener('click') 

  changeColor(color: string) {
    this.color = color;
  }

}
