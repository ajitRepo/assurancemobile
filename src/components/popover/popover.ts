import { Component } from '@angular/core';
import { ViewController, App, NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { EnrollListPage } from '../../pages/enroll-list/enroll-list';
import { EnrollmentPage } from '../../pages/enrollment/enrollment';
import { AuthProvider } from '../../providers/auth-provider';


/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */


@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  
  items:any;
  text: string;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {item:'Liste des enrôlés'},
      {item:'Enrôlement'},
      {item:'Deconnexion'},
    ];
    //this.navCtrl = app.getActiveNav();

  }

  itemClick(item) {
    this.viewCtrl.dismiss(item);
    switch(item) { 
      case "Liste des enrôlés": { 
        // this.navCtrl.setRoot(EnrollListPage);
         break; 
      } 
      case "Enrôlement": { 
         //this.navCtrl.setRoot(EnrollmentPage);
         break; 
      } 
      case "Deconnexion": {
         //this.AuthService.logout();
          //this.storage.clear();
         break;    
      } 
      
   }
  }

}
