import {
  Directive,
  HostBinding,
  Input,
  Output,
  HostListener,
  EventEmitter,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[e11ySlide]',
})
export class SlideDirective {
  slide: number = 0;
  @Output() focused = new EventEmitter<number>();
  @HostBinding('class') toggleClass = 'hidden';
  @HostBinding('tabindex') tabindex = '0';
  @HostListener('focus') enter() {
    this.focused.emit(this.slide);
  }
  @Input() set visible(value: boolean) {
    this.toggleClass = value ? 'shown' : 'hidden';
  }
  constructor(private el: ElementRef) {}
  focus() {
    this.el.nativeElement.focus();
  }
}

@Directive({
  selector: '[e11ySlideActivator]',
})
export class SlideActivatorDirective {
  slide: number = 0;
  _currentSlide: number = 0;
  @Input() set currentSlide(slide: number) {
    this._currentSlide = slide;
    this.tabindex = this._currentSlide > this.slide ? '0' : '-1';
  }
  @Output() focused = new EventEmitter<number>();
  @HostBinding('class') toggleClass = 'hidden';
  @HostBinding('tabindex') tabindex = '0';
  @HostListener('focus') enter() {
    this.focused.emit(this.slide);
  }
}
