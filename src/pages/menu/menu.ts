import { AuthProvider } from './../../providers/auth/auth';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
	rootPage: any;
  pages = [];
  username = '';

  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController, private authProvider: AuthProvider, private appCtrl: App) {
  }

  ionViewWillEnter() {
    if (this.authProvider.isAdmin()) {
      this.pages = [
        { title: 'Admin Dashboard', page: 'AdminPage', icon: 'home' },
        { title: 'Admin Second Page', page: 'AdminSecondPage', icon: 'book' }
      ];
      this.openPage('AdminPage');
    } else {
      this.pages = [
        { title: 'User Dashboard', page: 'UserPage', icon: 'home' },
        { title: 'User Second Page', page: 'UserSecondPage', icon: 'cafe' }
      ];
      this.openPage('UserPage');
    }
    this.username = this.authProvider.currentUser.name;
  }
 
  logout() {
    this.authProvider.logout();
    this.appCtrl.getRootNav().setRoot('LoginPage');
  }
 
  openPage(page) {
    this.nav.setRoot(page);
  }
 
  ionViewCanEnter() {
    return this.authProvider.isLoggedIn();
  }

}
