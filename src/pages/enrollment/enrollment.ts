import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  AlertController, LoadingController, App, PopoverController } from 'ionic-angular';
//import { AgeValidator } from  '../../validators/age';
//import { UsernameValidator } from  '../../validators/username';
import { EnrollProvider } from '../../providers/enroll-provider';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Http } from '@angular/http';
import { UserProvider } from '../../providers/user-provider';
import { PopoverComponent } from '../../components/popover/popover';

 

@Component({
  selector: 'page-enrollment',
  templateUrl: 'enrollment.html'
})
export class EnrollmentPage {
    


    loading: any;
    //id:any;
    @ViewChild('enrollSlider') enrollSlider: any;
    slideOneForm: FormGroup;
    slideTwoForm: FormGroup;

    //warmth: number = 0;
    ///toggle:boolean;

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
    
    submitAttempt: boolean = false;

  constructor(private app:App, public alertCtrl: AlertController, public http: Http,
     public loadingCtrl: LoadingController, private nfc:NFC, private ndef:Ndef,  
     public EnrollService: EnrollProvider,public UserService: UserProvider,
     public formBuilder: FormBuilder, public popoverCtrl: PopoverController) {

    

    this.slideOneForm = formBuilder.group({

      matricule: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      marque: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      model: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      usage: [ , Validators.required],
      puissance: [ , Validators.required],
      //warmth: [ , Validators.required],
      typeCarburant: [ '', Validators.required],
      nombrePlaces: [ , Validators.required]
     // age: [Number(), AgeValidator.isValid]
      //age: [ , Validators.required]
    }); 
    
     this.slideTwoForm = formBuilder.group({
      //username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
      NFCid: ['',Validators.required],
      nom: ['', Validators.compose([Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      prenom: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      telephone: ['', Validators.compose([Validators.maxLength(18), Validators.pattern('[0-9]*'), Validators.required])],
      proprietaire: ['', Validators.required],
      //toggle: ['', Validators.required]

     
    }); 

    //this.getId();

    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrollListPage');
    this.getId();

  } 
  ngAfterViewInit() {
    this.enrollSlider.autoHeight = true;
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(popoverData=> {
      console.log(popoverData);
    });
  }

  next(){
    this.enrollSlider.slideNext();
    
  }

  prev(){
      this.enrollSlider.slidePrev();
  }

  save(){
 
    this.submitAttempt = true;
 
    if(!this.slideOneForm.valid){
        this.enrollSlider.slideTo(0);
    }
    else if(!this.slideTwoForm.valid){
        this.enrollSlider.slideTo(1);
    }
    else {
      this.presentLoading();
      this.EnrollService.enrollement(this.matricule, this.marque, this.model, this.usage, this.puissance, this.typeCarburant, this.nombrePlaces, this.NFCid, this.nom, this.prenom, this.telephone, this.proprietaire)
      .subscribe(data =>{
        let message = data.message;
        if(data.code==0){   
          this.slideOneForm.reset();
          this.slideTwoForm.reset();    

          let alert = this.alertCtrl.create({
            //title: 'Enrollement',
            subTitle: message,
            buttons: ['OK']
          });
          this.dismissLoading();
          alert.present();
        }
      },
         err =>{
          let error = err.json();
          let message = error.message;
          console.log(error.code);
          console.log(error.status);
           if (error.code!=undefined) {
            let alert = this.alertCtrl.create({
              //title: 'Erreur',
              subTitle: message,
              buttons: ['OK']
            });
            this.dismissLoading()
            alert.present();        
           }
         });     
    }
 
  }
  getNfcId(){

   // this.slideTwoForm.setControl
     this.NFCid="test";
      //this.slideTwoForm.setControl('NFCid', new FormControl(this.NFCid));

  }
  getId(){

    let onSuccess = this.alertCtrl.create({
      title: 'Carte',
      subTitle: 'Lecture effectuée avec succès',
      buttons: ['OK']
    });

    let onError = this.alertCtrl.create({
      title: 'Echec de la lecture de la carte',
      subTitle: 'Veuillez ressayer',
      buttons: ['OK']
    });

    this.nfc.addNdefListener(() => {     
      console.log('successfully attached ndef listener');
    }, (err) => {
      onError.present;
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
      this.next();
      let message = this.ndef.textRecord('Hello world');
      this.nfc.share([message]).then(onSuccess.present).catch(onError.present);
      onSuccess.present();
      
      this.NFCid = this.nfc.bytesToHexString(event.tag.id).toUpperCase();
      
    });
   }

   presentLoading() {
 
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      cssClass:'loading'  
    });

    this.loading.present();

  }
  dismissLoading() {
    this.loading.dismiss();

  }
  


}
