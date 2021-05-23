import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


// @keyframes slidein {
//   from {
//     transform: scaleX(0);
//   }
//   to {
//     transform: scaleX(1);
//   }
// }
@Component({
  selector: 'app-reusable-animations',
  templateUrl: './reusable-animations.component.html',
  styleUrls: ['./reusable-animations.component.scss'],
  // animation: 3s linear 1s infinite running slidein;
  animations: [
    trigger('zoomOut', [
      state('opened', style({

      })),
      state('closed', style({

      })),
      transition('closed=>opened', [
        animate('1s', keyframes([
          style({ transform: 'scale(1.4)', offset: 0 }),
          // style({ transform: 'scaleX(1.3)', offset: 0.3 }),
          // style({ transform: 'scale(1.2)', offset: 0.7 }),
          style({ transform: 'scale(1)', offset: 1 })
        ]))
      ])
    ]),
    trigger('zoomIn', [
      transition('closed=>opened', [
        animate('0.8s', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          // style({ transform: 'scaleX(1.3)', offset: 0.3 }),
          // style({ transform: 'scale(1.2)', offset: 0.7 }),
          style({ transform: 'scale(1.23)', offset: 1 })
        ]))
      ])
    ]),
  ]
})
export class ReusableAnimationsComponent implements OnInit {
  selectControl: FormControl = new FormControl('null');

  animationArr: any[] = [
    {
      name: 'Zoom In',
      value: 'zoomIn'
    },
    {
      name: 'Zoom Out',
      value: 'zoomOut'
    }
  ];

  // tslint:disable-next-line: variable-name
  private _isOpened = false;
  public get isOpened(): boolean {
    return this._isOpened;
  }
  public set isOpened(value: boolean) {
    this._isOpened = value;
  }
  constructor() { }
  toggle(): void {
    this.isOpened = !this.isOpened;
  }

  ngOnInit(): void {
    this.selectControl.valueChanges.subscribe(data => {
      console.log(data, 'data ');
    });
  }

}
