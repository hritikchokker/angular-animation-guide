import * as animations from '../shared/animations';

import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-multi-feature',
  templateUrl: './multi-feature.component.html',
  styleUrls: ['./multi-feature.component.scss'],
  animations: [
    animations.openClose
  ]
})
export class MultiFeatureComponent implements OnInit {

  isOpen = false;
  isActive = false;
  constructor() { }
  ngOnInit(): void {
  }
  toggle(flag: boolean): void {
    this.isOpen = flag;
  }

  onAnimationEvent(event: AnimationEvent | any): void {
    // console.log(event, 'animation status');
  }

}
