import { Component, OnInit, Input, Attribute } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<h1>{{name}}</h1>`
})
export class ChildComponent implements OnInit {

  // @Input() name;

  constructor(@Attribute('name') public name) { }

  ngOnInit() {
  }

}
