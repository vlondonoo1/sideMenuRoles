// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthProvider } from '../auth/auth';
import { HttpClient } from '@angular/common/http';

/*
this provider is to define functionality of buttoms and call each provider
also should define componenents
*/
@Injectable()
export class CommonproviderProvider {
//public http: HttpClient
  constructor(private authProvider: AuthProvider, public http: HttpClient) {
    console.log('Hello CommonproviderProvider Provider');
  }


	checkActions(){
		// this.http.get('../../permision.json').subscribe((data) => {
  //          console.log(data);
  //       });
		let mode = this.authProvider.kindofmode()
		if(mode == 0){
			console.log("wonderful you are de admin")
		}else if (mode == 1){
			console.log("sorry you are logged but you can see everything")

		}else{
			console.log("your authentication was denied")
		}
	}

}









