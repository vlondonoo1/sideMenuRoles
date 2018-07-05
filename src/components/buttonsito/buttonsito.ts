import { Component } from '@angular/core';
import { CommonproviderProvider } from './../../providers/commonprovider/commonprovider';

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

  constructor(private commonProvider: CommonproviderProvider) {
    console.log('Hello ButtonsitoComponent Component');
    this.miami = 'Miami';
  }

  avoid(componente){
    console.log("respuesta",this.commonProvider.avoidcomponents(componente))
    return this.commonProvider.avoidcomponents(componente)

  }

}
