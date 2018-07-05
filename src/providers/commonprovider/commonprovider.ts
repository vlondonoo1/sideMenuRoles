// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
//import { HttpClient } from '@angular/common/http';

/*
this provider is to define functionality of buttoms and call each provider
also should define componenents
*/
@Injectable()
export class CommonproviderProvider {
//public http: HttpClient
  constructor(private authProvider: AuthProvider) {
    console.log('Hello CommonproviderProvider Provider');
  }


  avoidcomponents(com){
  	let permission= {  
    "ordebuton": { "permittedRoles": ["admin"] } ,
    "loadbuton": {"permittedRoles": ["user", "user"]},
    "other":  { "permittedRoles": ["admin"]}    
		}

		let mode=this.checkActions()
		
		  	
  	let fla = false
  	let permit= permission[com].permittedRoles;
  		 permit.forEach((word)=>{
  		if(word== mode){
  			fla=true
  			console.log(fla,"hereeeeee fla")
  		}
  
  		})
  	return fla

  }

	checkActions(){		
		let mode = this.authProvider.kindofmode()
		let role
		if(mode == 0){
			console.log("wonderful you are de admin")
			role="admin"
		}else if (mode == 1){
			console.log("sorry you are logged but you can see everything")
			role="user"
		}else{
			console.log("your authentication was denied")
			role=""
		}
		return role
	}

}









