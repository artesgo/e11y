import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';

import { RadioComponent } from './radio.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

storiesOf('Radio Button', module)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      imports: [ReactiveFormsModule],
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
      onClick: event => console.log(event),
    },
  }))
  .add('turtles radio control', () => ({
    templateUrl: "story-templates/radio-in-form.html",
    props: {
      turtles: turtles,
      turtlesControl
    },
  }))

const turtlesControl = new FormControl();
turtlesControl.valueChanges.subscribe(val => {
  console.log(val);
});

const players = [
  { label: '2 Players', name: 'playerCount', value: '2 Players' },
  { label: '3 Players', name: 'playerCount', value: '3 Players' },
  { label: '4 Players', name: 'playerCount', value: '4 Players' },
  { label: '5 Players', name: 'playerCount', value: '5 Players' },
  { label: '6 Players', name: 'playerCount', value: '6 Players' },
];
const turtles = [
  { label: 'Snapping Turtle', name: 'turtles', value: 'Snapping Turtle' },
  { label: 'Sea Turtle', name: 'turtles', value: 'Sea Turtle' },
  { label: 'Pond Turtle', name: 'turtles', value: 'Pond Turtle' },
]
