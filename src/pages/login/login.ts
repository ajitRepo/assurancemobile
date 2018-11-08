import { Component,ViewChild, Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

import { IonicPage, NavController, AlertController, LoadingController, App } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

import { AuthProvider } from '../../providers/auth-provider';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  loading: any;

  

  @ViewChild('username') username;
  @ViewChild('password') password;
 

  constructor(public navCtrl: NavController, private app:App, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController, public AuthService:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
   login(){
    
    if(this.AuthService.authentification(this.username.value,this.password.value)){
      let alert = this.alertCtrl.create({
        title: 'Connexion',
        subTitle: 'Vous etes connectés',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(HomePage);

    }else{
      
      let alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: "Mot de passe ou nom d'utilisateur incorrect",
        buttons: ['OK']
      });
      alert.present();

    }
  } 

  
  showRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
