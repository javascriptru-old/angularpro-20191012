import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LazyComponent },
      { path: 'deeplazy', loadChildren: () => import('./deeplazy/deeplazy.module').then(m => m.DeeplazyModule) }
    ])
  ]
})
export class LazyModule { }
