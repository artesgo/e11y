import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselComponent } from './carousel.component';
import { Component } from '@angular/core';
import { SlideActivatorDirective, SlideDirective } from './slide/slide.directive';

@Component({
  selector: 'CarouselHarness',
  template: `
  <e11y-carousel>
    <li e11ySlide (focused)="focus($event)"></li>
    <span e11ySlideActivator 
      (focused)="focus($event)"
      [currentSlide]="slide"
    >Focuser</span>
    <li e11ySlide (focused)="focus($event)"></li>
    <span e11ySlideActivator 
      (focused)="focus($event)"
      [currentSlide]="slide"
    >Focuser</span>
    <li e11ySlide (focused)="focus($event)"></li>
  </e11y-carousel>`
})
export class CarouselHarness {

}

describe('CarouselComponent', () => {
  let component: CarouselHarness;
  let fixture: ComponentFixture<CarouselHarness>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent, SlideActivatorDirective, SlideDirective, CarouselHarness ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
