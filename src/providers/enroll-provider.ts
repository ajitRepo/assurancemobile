import { Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Headers} from '@angular/http';
import { App,LoadingController} from 'ionic-angular';

@Injectable()
export class EnrollProvider {

      loading: any;
      
    constructor(private app:App,public http: Http, public loadingCtrl: LoadingController) {
        
    
    }
    
 
    
    enrollement(matricule:string, marque:string, model:string, usage:string, puissance:number, typeCarburant:string, nombrePlaces:number, NFCid:string, nom:string, prenom:string, telephone:number, proprietaire:string){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let body = {
            matricule: matricule,
            marque: marque,
            model: model,
            usage: usage,
            puisance: puissance,
            typeCarburant: typeCarburant,
            nombrePlaces: nombrePlaces,
            chauffeur :{
            nfcid: NFCid,
            nom: nom,
            prenom: prenom,
            telephone: telephone,
            proprietaire: proprietaire,
            }
        };
        console.log(JSON.stringify(body));

        return this.http.post('http://212.71.244.7:8080/assurance/savevoiture', JSON.stringify(body), {headers: headers})
        .map(res=>res.json())
        .subscribe(data =>{console.log(data.code)});
            
    }
 
    
 
}