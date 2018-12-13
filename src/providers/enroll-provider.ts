import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';
import { App,LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class EnrollProvider {

      loading: any;
      token:string;
      
    constructor(private app:App,public http: Http, public storage: Storage, public loadingCtrl: LoadingController) {
        
    
    }
    
 
    
    enrollement(matricule:string, marque:string, model:string, usage:string, puissance:number, typeCarburant:string, nombrePlaces:number, NFCid:string, nom:string, prenom:string, telephone:number, proprietaire:string){
        
        this.storage.get('mytoken').then((data) =>{
          this.token=data;
          console.log(this.token);
        });  
           
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' +this.token);
        headers.append('Accept','application/json');
        headers.append('Access-Control-Allow-Origin' , '*');
        headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    
        let body = {
            matricule: matricule,
            marque: marque,
            model: model,
            usage: usage,
            puissance: Number(puissance),
            typeCarburant: typeCarburant,
            nombrePlaces: Number(nombrePlaces),
            chauffeur :{
            nfcid: NFCid,
            nom: nom,
            prenom: prenom,
            telephone: telephone,
            proprietaire: proprietaire,
            }
        };
        console.log(JSON.stringify(body));
        

        return this.http.post('http://45.79.88.252/assurance/savevoiture', JSON.stringify(body), {headers: headers})
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
        //.subscribe(data =>{console.log(data.code)});
            
    }
 
    
 
}