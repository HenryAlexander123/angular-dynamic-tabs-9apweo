//our root app component
import { Component, ViewChild } from '@angular/core';

import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('personEdit') editPersonTemplate;
  @ViewChild(TabsComponent) tabsComponent;

  people = [
    {
      id: 1,
      name: 'EJEMPLO',
      surname: 'Strumpflohner',
      twitter: '@juristr',
    },
  ];

  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      this.editPersonTemplate,
      person,
      true
    );
  }

  // nueva pestaña
  onAddPerson() {
    this.tabsComponent.openTab(
      'persona nueva',
      this.editPersonTemplate,
      {},
      true
    );
  }
  // guarda los datos
  onPersonFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      this.people = this.people.map((person) => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
  }
}
