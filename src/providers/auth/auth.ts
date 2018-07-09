import { Injectable } from '@angular/core';

// this provider aauthenticated mode

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
        this.currentUser = {
          name: "general",
          role: 200
        };
        resolve(false);

      }
    });
  }

  isLoggedIn() {
    // this.isLoggedIni = true;
    console.log(this.currentUser.role)
    return this.currentUser != null;

  }

  kindofmode() {     //this is to asign modes
    console.log(this.currentUser.role)
    return this.currentUser.role;

  }
   kindofuser() {     //this is to asign modes
    console.log(this.currentUser.name)
    return this.currentUser.name;

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
