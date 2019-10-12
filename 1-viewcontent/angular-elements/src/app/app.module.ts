import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [HelloComponent]
})
export class AppModule {

  ngDoBootstrap() {}

  constructor(injector: Injector) {
    const helloElelemnt = createCustomElement(HelloComponent, { injector });
    customElements.define('custom-hello', helloElelemnt);
  }
}
