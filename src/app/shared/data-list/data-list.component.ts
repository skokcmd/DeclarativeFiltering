import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  template: '',
})
export class DataListComponent<T> {
  // generic input array
  @Input()
  items$: Observable<T[]>;

  constructor() {}
}
