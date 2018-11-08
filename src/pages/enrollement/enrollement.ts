import { Component, ViewChild, Injectable } from '@angular/core';
import { IonicPage, NavController, App, AlertController, LoadingController } from 'ionic-angular';
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

  @ViewChild('matricule') matricule;
  @ViewChild('marque') marque;
  @ViewChild('model') model;
  @ViewChild('usage') usage;
  @ViewChild('puissance') puissance;
  @ViewChild('typeCarburant') typeCarburant;
  @ViewChild('nombrePlaces') nombrePlaces;
  @ViewChild('NFCid') NFCid;
  @ViewChild('nom') nom;
  @ViewChild('prenom') prenom;
  @ViewChild('telephone') telephone;
  @ViewChild('proprietaire') proprietaire;


  constructor(public navCtrl: NavController, private app:App, public alertCtrl: AlertController, public http: Http, public loadingCtrl: LoadingController, public EnrollService: EnrollProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrollementPage');
  }

  saveAuto(){
    if(this.EnrollService.enrollement(this.matricule.value, this.marque.value, this.model.value, this.usage.value, this.puissance.value, this.typeCarburant.value, this.nombrePlaces.value, this.NFCid.value, this.nom.value, this.prenom.value, this.telephone.value, this.proprietaire.value)){
      let alert = this.alertCtrl.create({
        title: 'Enrollement',
        subTitle: 'Donnée enregistrées avec success',
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
    
  } 

}
