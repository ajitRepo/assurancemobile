import { Component, Injectable } from '@angular/core';
import { IonicPage, App, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { EnrollProvider } from '../../providers/enroll-provider';
import { NFC, Ndef } from '@ionic-native/nfc'



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


  constructor(private app:App, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController, private nfc:NFC, private ndef:Ndef,  public EnrollService: EnrollProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrollementPage');
  }


   getNfcId(){

    let onSuccess = this.alertCtrl.create({
      title: 'Bravo!',
      subTitle: 'ID nfc recupérer',
      buttons: ['OK']
    });

    let onError = this.alertCtrl.create({
      title: 'Erreur',
      subTitle: 'Id nfc non recuperé',
      buttons: ['OK']
    });


    this.nfc.addNdefListener(() => {
      this.presentLoading();
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
      this.loading.dismiss();
    
      let message = this.ndef.textRecord('Hello world');
      this.nfc.share([message]).then(onSuccess.present).catch(onError.present);
      
      this.NFCid = this.nfc.bytesToHexString(event.tag.id);
    });
   }

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
  presentLoading() {
 
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();

}

}
