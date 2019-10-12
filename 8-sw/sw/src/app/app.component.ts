import { Component } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sw';

  constructor(swUpdate: SwUpdate, swPush: SwPush) {

    // swUpdate.checkForUpdate()
    // swUpdate.available.subscribe(_ => {})

    // swPush.requestSubscription()

    // swPush.messages.subscribe(_ => {})

    const worker = new Worker('./my-worker.worker', { type: 'module'});
    worker.onmessage( (data:MessageEvent) => {
      console.log(data);
    });

    worker.postMessage('hello');
  }
}
