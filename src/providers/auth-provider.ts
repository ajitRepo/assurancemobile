import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

import {Http, Headers} from '@angular/http';
import { App,LoadingController, NavController } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';

@Injectable()
export class AuthProvider {
      loading: any;
     // code:any;
      private navCtrl: NavController;
 
    constructor(private app:App,public http: Http, public loadingCtrl: LoadingController) {
        this.navCtrl = app.getActiveNav();
    
    }
    
 
    
    
    authentification(username:string, password:string){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let body = {
            login: username,
            password: password
        };
        console.log(JSON.stringify(body));

        return this.http.post('http://212.71.244.7:8080/assurance/login', JSON.stringify(body), {headers: headers})
        .map(res => {
            // If request fails, throw an Error that will be caught
            if(res.status < 200 || res.status >= 300) {
              throw new Error('This request has failed ' + res.status);
            } 
            // If everything went fine, return the response
            else {
              return res.json();
            } 
          });
          //.subscribe(data =>{console.log(data)}, err => {console.log(err)});
            
    }

    logout(){
        this.navCtrl.setRoot(LoginPage);
        //this.storage.clear();
    }
    

   
 
    
 
}