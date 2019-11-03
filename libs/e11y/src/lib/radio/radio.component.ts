import { Component, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';
import { E11yOption } from './e11y.option';
import * as gsap from 'gsap';

@Component({
  selector: 'e11y-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements AfterViewInit {
  @Input() groupLabel: string = "radio group";
  @Input() options: E11yOption[] = [];
  @Output() focus = new EventEmitter();
  @ViewChildren('pettles') pettles: QueryList<ElementRef>;
  @ViewChildren('radios') radios: QueryList<ElementRef>;
  unit = 16;
  offset = 6;

  height = 32;
  width = 32;
  constructor() {

  }

  ngAfterViewInit() {
    for( let flower of this.pettles.toArray()) {
      this.setDefault(flower.nativeElement);
    }
  }

  setDefault(flower: Element) {
    gsap.TweenMax
      .set(flower, {
        ...this.scaledDown()
      })
  }

  focused(option: E11yOption, index: number) {
    this.focus.emit(option);
    
    const pettle: Element = this.pettles.toArray()[index].nativeElement;
    const radio: Element = this.radios.toArray()[index].nativeElement;
    const duration = 1.3;
    gsap.TweenMax
      .to(pettle, duration, {
        ease: gsap.Bounce.easeOut,
        transform: 'translate( 0px, 0px ) scale(1)',
      })
    gsap.TweenMax
      .set(radio, {
        rotation: '0',
      })
    gsap.TweenMax
      .to(radio, duration, {
        ease: gsap.Bounce.easeOut,
        rotation: '180',
      })
      // .eventCallback('onComplete', () => {
      //   console.log('onComplete');
      // })
  }

  scaledDown() {
    const scale = (this.unit - this.offset) / this.unit;
    const _default = {
      transform: `translate( ${this.offset}px, ${this.offset}px ) scale(${scale})`,
    };
    return _default;
  }

  blurred(option: E11yOption, index: number) {
    const leaf: Element = this.pettles.toArray()[index].nativeElement;
    const duration = 1.3;
    gsap.TweenMax
      .to(leaf, duration, {
        ease: gsap.Bounce.easeOut,
        ...this.scaledDown()
      })
      // .eventCallback('onComplete', () => {
      //   console.log('onComplete');
      // })

  }

  getRotation(index: number) {
    return `rotate( ${index*45} 16  16)`;
  }
}
