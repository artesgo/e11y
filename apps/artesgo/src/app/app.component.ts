import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import * as gsap from 'gsap';

@Component({
  selector: "artesgo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('gsapEl') gsapEl: ElementRef;
  title = "artesgo";
  options = [
    {
      label: 'pancake',
      name: 'pancake',
      value: 'pancake',
    },
    {
      label: 'oatmeal',
      name: 'oatmeal',
      value: 'oatmeal',
    },
    {
      label: 'soy sauce',
      name: 'soy sauce',
      value: 'soy sauce',
    },
    {
      label: 'tofu',
      name: 'tofu',
      value: 'tofu',
    },
  ];
  slide = 0;

  constructor() {
  }

  ngAfterViewInit() {
    // gsap.TweenLite.set(this.gsapEl.nativeElement, {
    //   background: '#FC0'
    // })
  }

  prevDefault(event: Event) {
    event.preventDefault();
    console.log('prevDefault');
    
  }
}
