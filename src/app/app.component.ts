import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Network } from '@ionic-native/network';
import { EnrollmentPage } from '../pages/enrollment/enrollment';
import { LoginPage } from '../pages/login/login';


import { EnrollListPage } from '../pages/enroll-list/enroll-list';
import {PopoverComponent} from '../components/popover/popover'



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  
  //rootPage:any = EnrollmentPage;
//rootPage:any = EnrollListPage;

  

  loader:any;
  

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private network: Network,public ToastCtrl:ToastController,  public storage: Storage, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Liste des enrôlés', component: EnrollListPage },
      { title: 'Enrôlement', component: EnrollmentPage },
      
    ];

  }

  initializeApp() {
    //this.checkNetwork();
    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  checkNetwork(){
    this.network.onDisconnect().subscribe(() => {
      this.storage.set('conn', false);
      let conoff = this.ToastCtrl.create({
          closeButtonText: 'Ok',
          showCloseButton: true,
          message: "vous n'êtes pas connecté",
          position: 'top'
      });
  
      conoff.present();
  });
  }

  
}
