import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';



import {Http, Headers} from '@angular/http';
import { LoadingController, NavController, App } from 'ionic-angular';

@Injectable()
export class UserProvider {
    username: any;
    password: any;
    loading: any;
    token:string;

    

    private navCtrl: NavController;

 
    constructor(private app:App, public storage: Storage, public http: Http, public loadingCtrl: LoadingController) {
        this.navCtrl = app.getActiveNav();
        
    }
 
    getUsers(){
 
        return this.http.get('http://212.71.244.7:8080/assurance/getuser').map(res => res.json());
 
    }

    getUser(){
        this.storage.get('mytoken').then((data) =>{
            this.token=data;
            console.log(this.token);
          });        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' +this.token);


        return this.http.get('http://212.71.244.7:8080/assurance/getuser',{headers: headers})
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
    
 
    
 
}