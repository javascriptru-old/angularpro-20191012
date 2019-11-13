import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-leveltwo1',
  template: `
  <p>leveltwo1 works!</p>`,
})
export class Leveltwo1Component {
  ngDoCheck() {
    console.log('Leveltwo1Component::DoCheck');
  }

}
