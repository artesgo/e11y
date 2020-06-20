import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

import { CarouselComponent } from './carousel.component';
import { SlideDirective, SlideActivatorDirective } from './slide/slide.directive';

storiesOf('Carousel', module)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      declarations: [ CarouselComponent, SlideDirective, SlideActivatorDirective ],
    })
  )
  .add('standard carousel', () => ({
    templateUrl: "story-templates/standard-carousel.html",
    props: {
      slide: 0,
      focus
    },
  }))



const focus = (slide: number) => {
  this.slide = slide;
}