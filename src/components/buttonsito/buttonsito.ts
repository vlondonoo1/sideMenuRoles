import { Component } from '@angular/core';
import { CommonproviderProvider } from './../../providers/commonprovider/commonprovider';
import { ConsoleProvider } from '../../providers/console/console';

/**
 * Generated class for the ButtonsitoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'buttonsito',
  templateUrl: 'buttonsito.html'
})
export class ButtonsitoComponent {

  miami: string;
  roles: Array<number> = [0];

  constructor(private commonProvider: CommonproviderProvider, private console: ConsoleProvider) {
    console.load('Hello ButtonsitoComponent Component');
    this.miami = 'Miami';
  }

  avoid(componente){
    console.log("respuesta",this.commonProvider.avoidcomponents(componente))
    return this.commonProvider.avoidcomponents(componente)

  }

}
