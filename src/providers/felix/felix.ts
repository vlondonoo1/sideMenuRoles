import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FelixProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FelixProvider {

  constructor() {
    console.log('Hello FelixProvider Provider');
  }

  load(msg){
    alert('FELIXXX '+msg);
  }

}
