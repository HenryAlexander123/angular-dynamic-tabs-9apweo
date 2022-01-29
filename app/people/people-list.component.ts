/**
 * Very simple component that renders a list of people
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent {
  @Input() people;
  @Output() addPerson = new EventEmitter<any>();
  @Output() editPerson = new EventEmitter<any>();
}
