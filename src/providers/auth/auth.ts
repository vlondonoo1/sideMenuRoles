import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface User {
  name: string;
  role: number;
}

@Injectable()
export class AuthProvider {
	private isLoggedIni = false;
	currentUser: User;
  constructor() {
    console.log('Hello AuthProvider');
  }
  login(name: string, pwd: string) : Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (name === 'admin' && pwd === 'admin') {
        this.currentUser = {
          name: name,
          role: 0
        };
        resolve(true);
      } else if (name === 'user' && pwd === 'user') {
        this.currentUser = {
          name: name,
          role: 1
        };
        resolve(true);
      } else {
        resolve(false);
      }
    });
  }

  isLoggedIn() {
    // this.isLoggedIni = true;
    return this.currentUser != null;

  }

  isAdmin() {
    return this.currentUser.role === 0;
  }
  logout() {
    this.currentUser = null;
    this.isLoggedIni = false;
  }

   authenticated() : boolean {
    return this.isLoggedIni;
  }

}
