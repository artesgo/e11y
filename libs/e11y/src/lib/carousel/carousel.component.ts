import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'e11y-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() skip: string;
  @Input() end: string;
  @Input() templates: TemplateRef<any>[];
  @Input() slide: number = 0;
  names: string[] = [
    'mike', 'tina', 'tony', 'terrance', 'karla'
  ]

  constructor() { }

  ngOnInit() {
  }

  goTo(index: number) {
    this.slide = index;
  }
}
