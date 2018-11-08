import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';


import {Http, Headers} from '@angular/http';
import { LoadingController, NavController } from 'ionic-angular';

@Injectable()
export class AuthProvider {
      loading: any;

    constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {

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
        .map(res=>res.json())
        .subscribe(data =>{console.log(data.message)});


    }



}
