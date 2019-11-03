import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import * as gsap from 'gsap';

@Component({
  selector: "artesgo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('gsapEl') gsapEl: ElementRef;
  @ViewChild('rotato') rotato: ElementRef;

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
  shown = true;

  constructor() {
  }

  ngAfterViewInit() {
    // gsap.TweenLite.set(this.gsapEl.nativeElement, {
    //   background: '#FC0'
    // })
  }

  animateMe() {
    const box: Element = this.gsapEl.nativeElement;
    const duration = 1.3;
    if (this.shown) {
      this.shown = false;
      gsap.TweenMax
        .to(box, duration, { ease: gsap.Bounce.easeOut, height: 32, width: 32, 'background-color': 'rbga(0, 255, 0, 1)' })
    } else {
      this.shown = true;
      gsap.TweenMax
        .to(box, duration, { ease: gsap.Bounce.easeOut, height: 1, width: 1, 'background-color': 'rbga(0, 0, 0, 1)' })
        .eventCallback('onComplete', () => {
          console.log('onComplete');
        })
    }
  }

  popIn() {
    const leaf: Element = this.rotato.nativeElement;
    const duration = 1.3;

    gsap.TweenMax
      .set(leaf, {
        rotation: "0"
      })
    gsap.TweenMax
      .to(leaf, duration, {
        ease: gsap.Linear.easeNone,
        rotation: "360",
      })
      .eventCallback('onComplete', () => {
        // gsap.TweenMax
        //   .to(leaf, duration, { ease: gsap.Linear.easeNone, transform: 'rotate(6.2rad)' })
      })
  }
  getRotation(index: number) {
    return `rotate( ${index*45} 16  16)`;
  }

  prevDefault(event: Event) {
    event.preventDefault();
  }
}
