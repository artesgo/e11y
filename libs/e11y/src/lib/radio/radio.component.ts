import { Component, OnInit, Input } from '@angular/core';
import { E11yOption } from './e11y.option';

@Component({
  selector: 'e11y-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {
  @Input() groupLabel: string = "radio group";
  @Input() options: E11yOption[] = [];

  height = 32;
  width = 32;
  constructor() { }

  ngOnInit() {
  }

}
