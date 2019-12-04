import * as gsap from 'gsap';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AppService } from './app.service';
import { animate, AnimProp, set } from '@artesgo/e11y';
import { GameSettings } from './game-settings/game-settings';

@Component({
  selector: 'artesgo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('rotato') rotato: ElementRef;

  title = 'artesgo';

  players = GameSettings.players;
  boardStyle = GameSettings.boardStyle;

  gpStyle = GameSettings.gamePieceStyle;
  playerStyle = GameSettings.playerPiecesStyle;
  cardStyle = GameSettings.cardStyle;

  slide = 0;
  shown = true;
  form: FormGroup;

  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.form = this.fb.group({
      playerRadio: new FormControl(),
      boardRadio: new FormControl(),
      cardRadio: new FormControl(),
      e11ySelect: new FormControl(),
    });

    this.form.get('e11ySelect').valueChanges.subscribe(change => {
      console.log(change);
    });
  }
  // TODO: GSAP rotate svg component
  popIn() {
    const leaf: Element = this.rotato.nativeElement;
    const duration = 1.3;
    const start = { rotation: '0' };
    const ease = gsap.Linear.easeNone;
    const animation: AnimProp = { rotation: '60' };
    const callback = () => {
      console.log("i'm done");
    };
    set(leaf, start);
    animate(leaf, duration, ease, animation, callback);
  }

  getRotation(index: number) {
    return `rotate( ${index * 45} 16  16)`;
  }

  prevDefault(event: Event) {
    event.preventDefault();
  }

  onSubmit() {
    console.log('submitted');
  }
}
