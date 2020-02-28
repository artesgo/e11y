import {
  Component,
  Input,
  QueryList,
  ContentChildren,
  AfterContentInit,
  ViewEncapsulation,
} from '@angular/core';
import {
  SlideDirective,
  SlideActivatorDirective,
} from './slide/slide.directive';

@Component({
  selector: 'e11y-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements AfterContentInit {
  @Input() skip: string;
  @Input() end: string;
  @Input() set slide(slide: number) {
    this._slide = slide;
    if (!this.slides) return;
    this.slides.toArray()[slide].focus();
    this.setVisibleSlide(this._slide);
  }
  get slide(): number {
    return this._slide;
  }
  @ContentChildren(SlideDirective) slides!: QueryList<SlideDirective>;
  @ContentChildren(SlideActivatorDirective) activators!: QueryList<
    SlideActivatorDirective
  >;
  _visibleSlide: SlideDirective;
  _slide: number = 0;

  ngAfterContentInit() {
    this.slides.map((slide, i) => (slide.slide = i));
    this.activators.map((slide, i) => (slide.slide = i));
    this.setVisibleSlide(this.slide);
  }

  /**
   * Allows quick navigation via button controls below the slides
   * @param index
   */
  setVisibleSlide(index: number) {
    if (!this.slides) return;
    this.slides.map((slide, i) => {
      if (i === index) {
        if (this._visibleSlide) {
          this._visibleSlide.visible = false;
        }
        this._visibleSlide = slide;
        this._visibleSlide.visible = true;
      } else {
        slide.visible = false;
      }
    });
  }
}
