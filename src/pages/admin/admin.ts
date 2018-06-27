import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from './../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
   ionViewCanEnter() {
    // return this.authProvider.authenticated();
    return this.authProvider.isLoggedIn();
  }
  // isAuthenticated(){
  //   return this.authProvider.isAdmin();
  // }
  validate(comp):boolean{
  let permisions = {orden:
        { user: true , admin: false },
        deliver:{ user: false, admin: true}
    }

    if(this.authProvider.isAdmin()){
      permisions[comp].admin
      console.log('esta es',permisions[comp].admin)
      return true
    }
    
  }
}
