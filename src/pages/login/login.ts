import { Component,ViewChild, Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


import { IonicPage, NavController, AlertController, LoadingController, App, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { EnrollmentPage } from '../enrollment/enrollment';


import { AuthProvider } from '../../providers/auth-provider';
//import { isTrueProperty } from 'ionic-angular/umd/util/util';

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
  Token:string;

  

  @ViewChild('username') username;
  @ViewChild('password') password;
 

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public storage: Storage, private app:App, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController, public AuthService:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){

    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      cssClass:'loading'  
    });
    loading.present();
    //subscription
    this.AuthService.authentification(this.username.value,this.password.value)
    .subscribe(data =>{
      this.Token=data.values.token;
      this.setToken(this.Token);
   
      if(data.code==0){
        
        let message = data.message
        loading.dismiss();
        let toast = this.toastCtrl.create({
          message: message,
          duration: 3000,
          position: 'middle',
          cssClass: "toast-success"
        });  
        toast.present();
        this.navCtrl.setRoot(EnrollmentPage);
      }
    },
       err =>{
        loading.dismiss();
        let error = err.json();
        let message = error.message;
        console.log(message);
         if (error.code!=undefined) {
          let alert = this.alertCtrl.create({
            //title: 'Erreur'+error.code,
            subTitle: message,
            buttons: ['OK']
          });
          alert.present();             
         }
       });  
  }

  setToken(token:string){
    this.storage.set('mytoken',token);
  }

  getToken(){
    this.storage.get('mytoken').then((data) =>{
      console.log(data);
    });
  }
  
  showRegister(){
    this.navCtrl.push(RegisterPage);
  }

  

}
