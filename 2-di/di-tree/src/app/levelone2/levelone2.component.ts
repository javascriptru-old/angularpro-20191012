import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-levelone2',
  template: `
  
  <p>levelone2 works!</p>

  `,
})
export class Levelone2Component {
  ngDoCheck() {
    console.log('Levelone2Component::DoCheck');
  }

}
