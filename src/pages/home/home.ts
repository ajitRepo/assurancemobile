import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NFC, Ndef } from '@ionic-native/nfc';
import { AssuranceService } from '../../services/assurance.service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private nfc: NFC, private ndef: Ndef) {

  }
  startNFC() {
    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
    
      let message = this.ndef.textRecord('Hello world');
      this.nfc.share([message]).then().catch();
    });
  }
  

}
