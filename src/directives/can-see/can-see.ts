import { Directive } from '@angular/core';

/**
 * Generated class for the CanSeeDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[can-see]' // Attribute selector
})
export class CanSeeDirective {

  constructor() {
    console.log('Hello CanSeeDirective Directive');
  }

}
