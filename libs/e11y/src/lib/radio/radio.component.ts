import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { E11yOption } from './e11y.option';
import * as gsap from 'gsap';
import { animate, set, scaleFromCenter, AnimProp } from '../gsap.util';

@Component({
  selector: 'e11y-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements AfterViewInit, ControlValueAccessor {
  @Input() groupName: string = 'radio group';
  @Input() options: E11yOption[] = [];
  @Output() focus = new EventEmitter();
  @ViewChildren('pettles') pettles: QueryList<ElementRef>;
  @ViewChildren('radios') radios: QueryList<ElementRef>;

  offset = 4;
  size = 32;
  value: string;

  private _onChange = (_: any) => {};
  private _onTouch = (_: any) => {};

  writeValue(option: string): void {
    if (option !== undefined) {
      this.value = option;
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }

  ngAfterViewInit() {
    for (let flower of this.pettles.toArray()) {
      this.setDefault(flower.nativeElement);
    }
  }

  setDefault(flower: Element) {
    set(flower, {
      ...scaleFromCenter(this.size / 2, this.offset),
    });
  }

  checked(option: E11yOption) {
    this._onChange(option.value);
  }
  touched(option: E11yOption) {
    this._onTouch(option.value);
  }

  focused(option: E11yOption, index: number) {
    this.focus.emit(option);

    // get focused radio
    const pettle: Element = this.pettles.toArray()[index].nativeElement;
    const radio: Element = this.radios.toArray()[index].nativeElement;
    const duration = 1.3;
    const ease = gsap.Bounce.easeOut;
    const unfoldPettles: AnimProp = {
      transform: 'translate( 0px, 0px ) scale(1)',
    };
    animate(pettle, duration, ease, unfoldPettles);

    const start = { rotation: '0' };
    const end = { rotation: '45' };
    set(radio, start);
    animate(radio, duration, ease, end);
  }

  blurred(option: E11yOption, index: number) {
    const pettle: Element = this.pettles.toArray()[index].nativeElement;
    const ease = gsap.Bounce.easeOut;
    const duration = 1.3;
    animate(pettle, duration, ease, {
      ...scaleFromCenter(this.size / 2, this.offset),
    });
  }

  getRotation(index: number) {
    return `rotate( ${index * 45} ${this.size / 2}  ${this.size / 2})`;
  }
}
