import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;


  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn() {
    if(this.username.value == "admin" && this.password.value =="admin"){
      let alert = this.alertCtrl.create({
        title: 'New friend!',
        subTitle: 'you are logged in ',
        buttons: ['OK']
      });
      alert.present();


    }
    //console.log(this.username.value , this.password.value)
  }
  showRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
