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
  @Input() tabs: Tabs;

  constructor() { }

  ngOnInit(): void {

  }

  getPosition(index): number {
    return index * this.unit;
  }
}
