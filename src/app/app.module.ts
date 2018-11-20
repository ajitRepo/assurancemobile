import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { EnrollmentPage } from '../pages/enrollment/enrollment';
import { IonicStorageModule } from '@ionic/storage';
import { RegisterPage } from '../pages/register/register';
import { EnrollListPage } from '../pages/enroll-list/enroll-list';

import { UserProvider } from '../providers/user-provider';
import { AuthProvider } from '../providers/auth-provider';
import { CarsProvider } from '../providers/cars-provider';
import { EnrollProvider } from '../providers/enroll-provider';

import {PopoverComponent} from '../components/popover/popover';
import { Voiture } from '../components/voiture/voiture';
import { Chauffeur } from '../components/chauffeur/chauffeur';

import { HttpModule } from '@angular/http';
import { NFC, Ndef } from '@ionic-native/nfc';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';


@NgModule({
  declarations: [
    MyApp,
    EnrollmentPage,  
    LoginPage,
    RegisterPage,
    EnrollListPage,
    PopoverComponent,
    Voiture,
    Chauffeur
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EnrollmentPage,
    LoginPage,
    RegisterPage,
    EnrollListPage,
    PopoverComponent,
    Voiture,
    Chauffeur
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NFC,
    Ndef,
    UserProvider,
    AuthProvider,
    EnrollProvider,
    CarsProvider,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
