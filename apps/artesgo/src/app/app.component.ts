import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from "@angular/core";
import * as gsap from 'gsap';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "artesgo-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('gsapEl') gsapEl: ElementRef;
  @ViewChild('rotato') rotato: ElementRef;

  title = "artesgo";
  options = [
    {
      label: 'pancake',
      name: 'grouper',
      value: 'pancake',
    },
    {
      label: 'oatmeal',
      name: 'grouper',
      value: 'oatmeal',
    },
    {
      label: 'soy sauce',
      name: 'grouper',
      value: 'soy sauce',
    },
    {
      label: 'tofu',
      name: 'grouper',
      value: 'tofu',
    },
  ];
  slide = 0;
  shown = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      e11yRadio: new FormControl('pancake')
    });

    this.form.get('e11yRadio').valueChanges.subscribe(change => {
      console.log(change);
    });
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

  onSubmit() {
    console.log('submitted');
    
  }
}
