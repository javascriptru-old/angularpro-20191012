import { Component, OnInit, ContentChild, ContentChildren, QueryList, ElementRef, ViewChild, ViewChildren, AfterContentInit, AfterViewInit, TemplateRef, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { HostlinkDirective } from '../hostlink.directive';
import { BannerComponent } from '../banner/banner.component';
import { Banner2Component } from '../banner2/banner2.component';

@Component({
  selector: 'app-item',
  template: `VIEW | <ng-content select="h1"></ng-content>
  <ng-container *ngTemplateOutlet="mainTemaplte"></ng-container>


  <ng-container *ngComponentOutlet="mycomponent"></ng-container>

  `,
})
export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {
  
  mycomponent;

  // content
  @ContentChild('t', { static: true } ) mainTemaplte: TemplateRef<HTMLElement>;
  // @ContentChildren(ChildComponent) list: QueryList<ElementRef>;
  // @ViewChild
  // @ViewChildren
  // @ContentChildren(HostlinkDirective,
  //       { read: ItemComponent } ) list2: ItemComponent;

  constructor(
    // private cfr: ComponentFactoryResolver,
    // private view: ViewContainerRef
  ) { }

  ngOnInit() {
    // console.log(this.mainContent);
    // const bannerFactory = this.cfr.resolveComponentFactory(BannerComponent);
    // setTimeout(_ => {
    //   this.view.createComponent(bannerFactory);
    // }, 3000);
    this.mycomponent = BannerComponent;
    setTimeout(_ => {
      this.mycomponent = Banner2Component;
    }, 3000);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

}

/*

function sum(a,b){
  return a + b;
}


*/
