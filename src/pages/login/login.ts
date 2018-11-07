import { Component,ViewChild, Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
//import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/map';


import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
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
 

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController
     /*public AuthService:AuthProvider*/) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  /* signIn() {
    if(this.username.value == "admin" && this.password.value =="admin"){
      let alert = this.alertCtrl.create({
        title: 'New friend!',
        subTitle: 'you are logged in ',
        buttons: ['OK']
      });
      alert.present();

    }
    //console.log(this.username.value , this.password.value)
  } */


  /* login(){
    
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
  } */

  login(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {
        login: this.username.value,
        password: this.password.value
    };
    console.log(JSON.stringify(body));

    return this.http.post('http://212.71.244.7:8080/assurance/login', JSON.stringify(body), {headers: headers})
    .map(res=>res.json())
    .subscribe(data =>{if(data.code==0){
      this.navCtrl.push(HomePage)
    }
    
    });

        
}
  showRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
