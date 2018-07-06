// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import {SharedModule} from '../../shared/shared.module';
//import { HttpClient } from '@angular/common/http';

/*
this provider is to define functionality of buttoms and call each provider
also should define componenents
*/
@Injectable()
export class CommonproviderProvider {
//public http: HttpClient
  constructor(private authProvider: AuthProvider, private share: SharedModule) {
    console.log('Hello CommonproviderProvider Provider');
  }


  avoidcomponents(com){   
    let fla = false
    let permit= this.share.check[com].permittedRoles;
       permit.forEach((word)=>{
      if(word== this.checkActions()){
        fla=true
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









