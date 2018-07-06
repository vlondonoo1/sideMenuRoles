import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";

@NgModule({
  imports: [
    IonicModule
    
  ],
  exports: []
})
export class SharedModule {
	
  constructor() {
    
  }
  	check ={
    "ordebuton": { "permittedRoles": ["admin"] } ,
    "loadbuton": {"permittedRoles": ["user", "user"]},
    "other":  { "permittedRoles": ["user"]}
    }

  
}

