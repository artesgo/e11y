import { RadioComponent } from './radio.component';

export default {
  title: 'Radio Button',
}

export const singleOption = () => ({
  component: RadioComponent,
  props: {
    options: [
      { value: 1, label: 'one'},
    ],
    groupName: "harness"
  }
})
export const threeOptions = () => ({
  component: RadioComponent,
  props: {
    options: [
      { value: 1, label: 'one'},
      { value: 2, label: 'two'},
      { value: 3, label: 'tre'},
    ],
    groupName: "harness"
  }
})