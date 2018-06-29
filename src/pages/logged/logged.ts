import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommonproviderProvider } from './../../providers/commonprovider/commonprovider';
/**
 * Generated class for the LoggedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logged',
  templateUrl: 'logged.html',
})
export class LoggedPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private commonProvider: CommonproviderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoggedPage');
  }


  boton2(){
  	this.commonProvider.checkActions()

  }
}
