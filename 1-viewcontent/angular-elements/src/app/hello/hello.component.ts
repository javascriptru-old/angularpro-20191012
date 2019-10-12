import { Component, OnInit, Input, Output, EventEmitter, ContentChild } from '@angular/core';

@Component({
  selector: 'custom-hello',
  template: `<h1 (click)="clicked.emit(name)">Hello, {{name}}!</h1>
  
  <ng-content></ng-content>
  `
})
export class HelloComponent implements OnInit {
  @Input() name;
  @Output() clicked = new EventEmitter();
  // @ContentChild

  constructor() { }

  ngOnInit() {
  }

}
