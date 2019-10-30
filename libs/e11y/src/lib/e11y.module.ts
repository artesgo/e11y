import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    RadioComponent,
    CarouselComponent,
  ],
  exports: [ 
    RadioComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class E11yModule { }
