import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export const openClose = trigger('openClose', [
  // ...
  state('open', style({
    transform: 'scale(1.5)',
    color: 'red',
    borderRadius: '20%',

    // height: '200px',
    // opacity: 1,
    // backgroundColor: 'yellow'
  })),
  state('true', style({ height: '*' })),
  state('false', style({ height: '0px' })),
  transition('false <=> true', animate(500)),
  state('closed', style({
    transform: 'scale(1)',
    color: '#000',
    borderRadius: '0px'
    // height: '100px',
    // opacity: 0.5,
    // backgroundColor: 'green'
  })),
  transition('open => closed', [
    animate('0.2s')
  ]),
  transition('closed => open', [
    animate('0.2s')
  ]),
  transition('* => *', [
    animate('1s', keyframes([
      style({ opacity: 0.1, offset: 0.1 }),
      style({ opacity: 0.6, offset: 0.2 }),
      style({ opacity: 1, offset: 0.5 }),
      style({ opacity: 0.2, offset: 0.7 })
    ]))
  ])
]);

export const shrinkOut = trigger('shrinkOut', [
  state('in', style({ height: '*' })),
  transition('* => void', [
    style({ height: '*' }),
    animate(250, style({ height: 0 }))
  ])
]);
