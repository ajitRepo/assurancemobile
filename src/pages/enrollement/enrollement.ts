import { Component, Injectable } from '@angular/core';
import { IonicPage, App, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { EnrollProvider } from '../../providers/enroll-provider';

/**
 * Generated class for the EnrollementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Injectable()
@Component({
  selector: 'page-enrollement',
  templateUrl: 'enrollement.html',
})
export class EnrollementPage {
  loading: any;

 
  matricule:string;
  marque:string;
  model:string;
  usage:string;
  puissance:number;
  typeCarburant:string;
  nombrePlaces:number;
  NFCid:string;
  nom:string;
  prenom:string;
  telephone:number;
  proprietaire:string;


  constructor(private app:App, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController,  public EnrollService: EnrollProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrollementPage');
  }


   /* saveAuto(){
    //this.matricule, this.marque, this.model, this.usage, this.puissance, this.typeCarburant, this.nombrePlaces, this.NFCid, this.nom, this.prenom, this.telephone, this.proprietaire

     if(this.EnrollService.enrollement(this.matricule, this.marque, this.model, this.usage, this.puissance, this.typeCarburant, this.nombrePlaces, this.NFCid, this.nom, this.prenom, this.telephone, this.proprietaire)){
      let alert = this.alertCtrl.create({
        title: 'Enrollement',
        subTitle: 'Données enregistrées avec success',
        buttons: ['OK']
      });
      alert.present();
    
    }else{
      
      let alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: "Verifiez les champs",
        buttons: ['OK']
      });
      alert.present();

    } 
    
  }  */

  saveAuto(){
    this.EnrollService.enrollement(this.matricule, this.marque, this.model, this.usage, this.puissance, this.typeCarburant, this.nombrePlaces, this.NFCid, this.nom, this.prenom, this.telephone, this.proprietaire)
    .subscribe(data =>{
      if(data.code==0){
        
        let alert = this.alertCtrl.create({
          title: 'Enrollement',
          subTitle: 'Données enregistrées avec success',
          buttons: ['OK']
        });
        alert.present();
      }
    },
       err =>{
         if (err.status==400) {
          let alert = this.alertCtrl.create({
            title: 'Erreur',
            subTitle: "Verifiez les champs",
            buttons: ['OK']
          });
          alert.present();        
         }
       });  


  }

}
