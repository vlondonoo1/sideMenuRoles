import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LaguerthaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LaguerthaProvider {

  constructor() {
    console.log('Hello LaguerthaProvider Provider');
  }

  load(msg){
    alert('LAGUERTHA '+msg);
  }

}
