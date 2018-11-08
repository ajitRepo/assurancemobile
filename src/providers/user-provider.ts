import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


import {Http, Headers} from '@angular/http';
import { LoadingController, NavController } from 'ionic-angular';

@Injectable()
export class UserProvider {
    username: any;
    password: any;
    loading: any;
 
    constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {
 
    }
 
    getUsers(){
 
        return this.http.get('http://212.71.244.7:8080/assurance/getuser').map(res => res.json());
 
    }
    
 
    
 
}