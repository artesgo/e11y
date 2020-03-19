import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

import { RadioComponent } from './radio.component';

storiesOf('Radio Button', module)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      declarations: [ RadioComponent ],
    })
  )
  .add('centered template', () => ({
    template: `
    <e11y-radio
      [groupName]="'Player Count'"
      [options]="players"
      (click)="onClick($event)"
    ></e11y-radio>`,
    props: {
      players: players,
      onClick: event => {
        console.log('some bindings work');
        console.log(event);
      },
    },
  }));

const players = [
  { label: '2 Players', name: 'playerCount', value: '2 Players' },
  { label: '3 Players', name: 'playerCount', value: '3 Players' },
  { label: '4 Players', name: 'playerCount', value: '4 Players' },
  { label: '5 Players', name: 'playerCount', value: '5 Players' },
  { label: '6 Players', name: 'playerCount', value: '6 Players' },
];