import { Component, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { NavController, AlertController, LoadingController, App } from 'ionic-angular';
//import { AgeValidator } from  '../../validators/age';
//import { UsernameValidator } from  '../../validators/username';
import { EnrollProvider } from '../../providers/enroll-provider';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Http } from '@angular/http';
import { UserProvider } from '../../providers/user-provider';

 

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})
export class TestPage {
    


    loading: any;
    //id:any;
    @ViewChild('enrollSlider') enrollSlider: any;
    slideOneForm: FormGroup;
    slideTwoForm: FormGroup;

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
     public formBuilder: FormBuilder) {

    this.slideOneForm = formBuilder.group({

      matricule: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      marque: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      model: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      usage: [ , Validators.required],
      puissance: [ , Validators.required],
      typeCarburant: [ '', Validators.required],
      nombrePlaces: [ , Validators.required]
     // age: [Number(), AgeValidator.isValid]
      //age: [ , Validators.required]
    }); 
    
     this.slideTwoForm = formBuilder.group({
      //username: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')]), UsernameValidator.checkUsername],
      NFCid: ['',Validators.required],
      nom: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      prenom: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      telephone: ['', Validators.compose([Validators.maxLength(18), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      proprietaire: ['', Validators.required]
     
    }); 

    //this.getId();

    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrollListPage');
    this.getId();

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
  getNfcId(){

   // this.slideTwoForm.setControl
     this.NFCid="test";
      //this.slideTwoForm.setControl('NFCid', new FormControl(this.NFCid));

  }
  getId(){

    let onSuccess = this.alertCtrl.create({
      title: 'Bravo!',
      subTitle: 'ID recupérer',
      buttons: ['OK']
    });

    let onError = this.alertCtrl.create({
      title: 'Erreur',
      subTitle: 'Id nfc non recuperé',
      buttons: ['OK']
    });

    this.nfc.addNdefListener(() => {     
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
      this.next();
      let message = this.ndef.textRecord('Hello world');
      this.nfc.share([message]).then(onSuccess.present).catch(onError.present);
      onSuccess.present();
      
      this.NFCid = this.nfc.bytesToHexString(event.tag.id);
    });
   }

   presentLoading() {
 
    this.loading = this.loadingCtrl.create({
        content: 'Please wait...'
    });

    this.loading.present();

  }
  


}
