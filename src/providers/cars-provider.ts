import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {Http, Headers} from '@angular/http';
import { LoadingController, NavController, App } from 'ionic-angular';

@Injectable()
export class CarsProvider {
    username: any;
    password: any;
    loading: any;
    token:string;

    

    private navCtrl: NavController;

 
    constructor(private app:App, public storage: Storage, public http: Http, public loadingCtrl: LoadingController) {
        this.navCtrl = app.getActiveNav();
        //storage.clear();
        
    }
 
    getCars(){
        this.storage.get('mytoken').then((data) =>{
            this.token=data;
            console.log(this.token);
          });

        let headers = new Headers();
        headers.append('Accept', 'application/json');
        //headers.append('Origin', 'http://212.71.244.7:8080/assurance');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
		    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        headers.append('Authorization', 'Bearer '+this.token);


        return this.http.get('http://45.79.88.252/assurance/voitures',{headers: headers})
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
            
    }
    getCar(){

    }
    
 
    
 
}