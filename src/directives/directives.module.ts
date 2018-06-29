import { NgModule } from '@angular/core';
import { CanSeeDirective } from './can-see/can-see';



@NgModule({
	declarations: [CanSeeDirective],
	imports: [],
	exports: [CanSeeDirective]
})
export class DirectivesModule {
		constructor(){}
 
//  	validate(com,role){
//   let fla = false
//   	let permit= comp[com].permittedRoles;
//   		 permit.forEach((word)=>{
//   		if(word== role){
//   			fla=true
//   		}
  
//   		})
//   	return fla
// }



}
