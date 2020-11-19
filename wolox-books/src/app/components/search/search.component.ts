import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'wb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  userSearch: string = '';

  @Output() onUserSearch: EventEmitter<string> = new EventEmitter<string>();

  emitUserInput(evt: KeyboardEvent): void {
    this.onUserSearch.emit((evt.target as HTMLInputElement).value as string)
  }
}
