import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  forwardRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { E11yOption } from '../radio/e11y.option';
import { animate, AnimProp, set, scaleFromCenter } from '../gsap.util';
import * as gsap from 'gsap';

/**
 * Radio Select Control
 * 👍 Completed Features
 * 👍 Open and Close if group is blurred
 * 👍 Add Form Control Features
 *
 * 👎 Todo Features
 * 👎 Animate Selection
 * 👎 Animate Focus
 */
@Component({
  selector: 'e11y-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor, AfterViewInit {

  //#region : IO
  @Input() id: string;
  @Input() name: string;
  @Input() options: E11yOption[];
  @Input() placeholder = 'Select...';
  //#endregion : IO
  
  //#region : View
  @ViewChildren('radio') radios: QueryList<any>;
  @ViewChild('svg', { static: true }) svg: ElementRef;
  @ViewChild('pettles', { static: true }) pettles: ElementRef;
  //#endregion : View

  //#region : Properties
  value: E11yOption;
  public showList = false;
  _target = 0;
  _size = 32;
  _offset = 6;
  _focused: boolean = false;
  set focused(val: boolean) {
    if (val) {
      this.foldPettles();
    } else {
      this.unfoldPettles();
    }
    this._focused = val;
  }
  get focused() {
    return this._focused;
  }
  private _index: number;
  private _keydown = false;
  //#endregion : Properties

  //#region : CONTROL_VALUE_ACCESSOR
  private _onChange = (_: any) => {};
  private _onTouch = (_: any) => {};

  writeValue(option: E11yOption): void {
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
  //#endregion : CONTROL_VALUE_ACCESSOR
  
  //#region : LIFE_CYCLE
  ngAfterViewInit() {
    this.setDefault(this.pettles.nativeElement);
  }
  //#endregion : LIFE_CYCLE

  //#region : TEMPLATE ACTIONS
  changeSelection(change: boolean) {
    this.showList = change;
    this._keydown = true;
    if (change) {
      this.showList = true;
    }
  }

  click(selected: boolean) {
    // prevents keydowns (up/down) from triggering this
    if (!this._keydown) {
      this.showList = selected;
    }
    this._keydown = false;
  }

  select(opt, index) {
    this.value = opt;
    this._index = index;
    this._onChange(this.value.value);
  }

  // close when overlay is clicked
  closeDropdown() {
    this.showList = false;
  }

  // clicking the custom dropdown also selects the respective native control
  selectNative(index: number) {
    if (this.radios) {
      const radios = this.radios.toArray();
      radios[index].nativeElement.focus();
      radios[index].nativeElement.checked = true;
    }
  }

  // required so that clicking on the trigger allows navigation via keyboard input
  focusRadios() {
    const radios = this.radios.toArray();
    if (this._index) {
      radios[this._index].nativeElement.focus();
    } else {
      radios[0].nativeElement.focus();
    }
    const graphic = this.svg.nativeElement;
    const duration = 1.3;
    const start: AnimProp = {
      rotation: '0',
    };
    const end: AnimProp = {
      rotation: '180',
    };
    const log = () => console.log('derp');
    set(graphic, start);
    animate(graphic, duration, gsap.Bounce.easeOut, end, log);
    this.unfoldPettles();
  }
  //#endregion : TEMPLATE ACTIONS
  
  //#region : MODEL ACTIONS
  private foldPettles() {
    const pettles = this.pettles.nativeElement;
    const duration = 1.3;
    animate(pettles, duration, gsap.Bounce.easeOut, {
      ...scaleFromCenter(this._size / 2, this._offset),
    });
  }

  private unfoldPettles() {
    const pettles = this.pettles.nativeElement;
    const duration = 1.3;
    const unfoldPettles: AnimProp = {
      transform: 'translate( 0px, 0px ) scale(1)',
    };
    animate(pettles, duration, gsap.Bounce.easeOut, unfoldPettles);
  }

  /**
   * svg setup
   * @param index
   */
  private getRotation(index: number) {
    return `rotate( ${index * 60} ${this._size / 2}  ${this._size / 2})`;
  }

  private setDefault(el: Element) {
    set(el, {
      ...scaleFromCenter(this._size / 2, this._offset),
    });
  }
  //#endregion : MODEL ACTIONS
}
