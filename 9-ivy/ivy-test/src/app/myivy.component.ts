/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myivy',
  template: `
     <p>
        myivy works! <b>{{name}}</b>
     </p>
     <input (input)="name = $event.target.value">
  `,
})
export class MyivyComponent {
   name;
}
*/

import * as core from '@angular/core';

export class MyivyComponent {
   name = 'Some text';

   updateName(name, ctx) {
     this.name = name;
     core.ɵdetectChanges<MyivyComponent>(ctx);
   }

   static ngComponentDef = core.ɵɵdefineComponent({
     consts: 5,
     vars: 5,
     type: MyivyComponent,
     selectors: [['app-myivy']],
     factory: () => new MyivyComponent(),
     template: (renderFlags: core.ɵRenderFlags, ctx: MyivyComponent) => {
        if(renderFlags & 1) {
          core.ɵɵelementStart(0, 'p');
          core.ɵɵtext(1, 'myivy works!');
          core.ɵɵelementStart(2, 'b');
          core.ɵɵelementEnd();
          core.ɵɵelementEnd();
          core.ɵɵelementStart(3, 'input');
          core.ɵɵlistener('input', $event => ctx.updateName($event.target.value, ctx));
        }
        if(renderFlags & 2) {
          core.ɵɵtextBinding(2, ctx.name);
          core.ɵɵelementAttribute(3, 'value', ctx.name);
        }
     }
   });

}

core.ɵrenderComponent(MyivyComponent);