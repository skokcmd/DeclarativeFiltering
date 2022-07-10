import { Component } from '@angular/core';
import { DataListComponent } from '../data-list/data-list.component';
import { Filterable } from '../Filterable';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  template: '',
})
export class FilterableDataListComponent<T>
  extends DataListComponent<T>
  implements Filterable<T>
{
  // values for filtering & input field
  filteredValues$: Observable<T[]>;
  searchedField: FormControl;
  constructor() {
    super();
    this.searchedField = new FormControl<string>('');
    this.filteredValues$ = this.items$;
  }

  // function that filters the filteredValues array
  // accepts callback function (as param) that returns filtered array of data based on its input items
  filter(callback: (items: T[], searchTerm: string) => T[]): void {
    // Observable of the input field, starts with its default value('')
    const searchTermInput$: Observable<string> =
      this.searchedField.valueChanges.pipe(startWith(this.searchedField.value));

    // filtering  the filtered values using the provided callback function
    this.filteredValues$ = combineLatest([this.items$, searchTermInput$]).pipe(
      map(([items, searchTerm]) => callback(items, searchTerm))
    );
  }
}
