import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio/radio.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SelectComponent } from './select/select.component';
import {
  SlideDirective,
  SlideActivatorDirective,
} from './carousel/slide/slide.directive';

const exported = [
  RadioComponent,
  CarouselComponent,
  SelectComponent,
  SlideDirective,
  SlideActivatorDirective,
];

@NgModule({
  declarations: exported,
  exports: exported,
  imports: [CommonModule],
})
export class E11yModule {}
