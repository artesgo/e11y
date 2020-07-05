import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, Input } from '@angular/core';
import * as gsap from 'gsap';
import { animate, set, scaleFromCenter, AnimProp } from '../gsap.util';
import { Tabs } from './tabs';

@Component({
  selector: 'elly-kalimba',
  templateUrl: './kalimba.component.html',
  styleUrls: ['./kalimba.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KalimbaComponent implements OnInit {
  @Input() unit = 32;
  @Input() gap = 12;
  @Input() tabs: Tabs;

  constructor() { }

  ngOnInit(): void {

  }

  //#region render tines
  getFill(index: number) {
    if ((index + 1) % 3 === 0) {
      return '#FC0';
    } else {
      return '#AAA';
    }
  }

  getPosition(index): number {
    return index * this.unit + 4 + 1;
  }

  getPositionV(index): number {
    return (-31) - Math.abs(index - 8) * 6;
  }
  //#endregion

  renderNote() {

  }

  renderTabs() {

  }

  parse(event: KeyboardEvent) {
    const key = event.key;
    const allowed = new RegExp('[a-gA-G1-3]');
    if (allowed.test(key)) {
      console.log(key)
    }
  }
}
