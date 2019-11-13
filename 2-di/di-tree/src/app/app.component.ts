import { Component, DoCheck, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  app.component
<div>
  <app-levelone1></app-levelone1>
  <app-levelone2></app-levelone2>
</div>`
})
export class AppComponent implements DoCheck {
  ngDoCheck() {
    console.log('AppComponent::DoCheck');
  }
}
