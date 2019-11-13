import { Component, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-levelone1',
  template: `
  <app-leveltwo1></app-leveltwo1>
  <app-leveltwo2></app-leveltwo2>
  `,
})
export class Levelone1Component {
  ngDoCheck() {
    console.log('Levelone1Component::DoCheck');
  }

  constructor(cd: ChangeDetectorRef) {
     setTimeout(_ => {
       console.clear()
       //console.log('ChangeDetectorRef::detectChanges()');
       //cd.detectChanges();
       console.log('ChangeDetectorRef::markForCheck()');
       cd.markForCheck();
     }, 5000)
  }

}
