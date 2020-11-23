import { Component, EventEmitter, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'wb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  userSearch: string = '';
  faSearch = faSearch;

  @Output() onUserSearch: EventEmitter<string> = new EventEmitter<string>();

  emitUserInput(evt: KeyboardEvent): void {
    this.onUserSearch.emit((evt.target as HTMLInputElement).value as string)
  }
}
