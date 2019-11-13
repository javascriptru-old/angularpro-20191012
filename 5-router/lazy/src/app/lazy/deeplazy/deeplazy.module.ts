import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeeplazyComponent } from './deeplazy/deeplazy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DeeplazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DeeplazyComponent }
    ])
  ]
})
export class DeeplazyModule { }
