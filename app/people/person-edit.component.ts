/**
 * Simple component to abstract the editing of a person
 * object.
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'person-edit',
  templateUrl: './person-edit.component.html',
})
export class PersonEditComponent implements OnInit {
  personForm: FormGroup;

  @Input() person;
  @Output() savePerson = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    //enlaza las varibles del formualrio
    this.personForm = this.fb.group({
      id: '',
      name: '',
      surname: '',
      twitter: '',
    });
  }

  ngOnInit() {
    //inicializa el formulario
    this.personForm.setValue({
      id: this.person.id || -1,
      name: this.person.name || '2',
      surname: this.person.surname || 'esto escribi en codigo',
      twitter: this.person.twitter || '',
    });
  }

  //función del boton
  guardarPersona() {
    let dataModel = this.personForm.value;
    this.savePerson.emit(dataModel);
  }
}
