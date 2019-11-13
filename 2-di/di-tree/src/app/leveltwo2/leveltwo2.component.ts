import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-leveltwo2',
  template: `
  <p>leveltwo2 works!</p>
  `,
})
export class Leveltwo2Component  {
  ngDoCheck() {
    console.log('Leveltwo2Component::DoCheck');
  }
}
