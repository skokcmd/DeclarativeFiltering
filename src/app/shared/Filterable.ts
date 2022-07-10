import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

export interface Filterable<T> {
  filteredValues$: Observable<T[]>;
  searchedField: FormControl;
  filter(callback: (items: T[], searchTerm: string) => T[]): void;
}
