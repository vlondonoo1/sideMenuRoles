import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 user = {
    name: 'admin',
    pwd: 'admin'
  };
  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private alertCtrl: AlertController) {
  }

   loginUser() {
    this.authProvider.login(this.user.name, this.user.pwd).then(success => {
      if (success) {
        this.navCtrl.setRoot('MenuPage');
      }
       
     }).catch(err =>{
        let alert = this.alertCtrl.create({
          title: 'Login failed',
          message: 'Please check your credentials',
          buttons: ['OK']
        });
        alert.present();      
    });
  }
}
