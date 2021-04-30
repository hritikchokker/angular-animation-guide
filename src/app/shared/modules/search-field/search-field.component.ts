import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter
} from 'rxjs/operators';

import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFieldComponent implements OnInit, OnDestroy {

  subscription: Subscription[] = [];
  @Input() placeholder = 'search here';
  searchedValue: EventEmitter<any> = new EventEmitter();
  searchControl: FormControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
    this.subscription.push(
      this.searchControl.valueChanges
        .pipe(
          debounceTime(500),
          distinctUntilChanged(),
          filter((data: any) => {
            if (data) {
              return data.trim();
            }
          })
        )
        // tslint:disable-next-line: deprecation
        .subscribe((data: string) => {
          if (data) {
            console.log(data, 'emit');
            this.searchedValue.emit(data);
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(subs => subs.unsubscribe());
  }

}
