import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    RadioComponent,
    CarouselComponent,
    SelectComponent,
  ],
  exports: [ 
    RadioComponent,
    CarouselComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class E11yModule { }
