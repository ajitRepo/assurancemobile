import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EnrollementPage } from '../pages/enrollement/enrollement';
import { TestPage } from '../pages/test/test';

import { IonicStorageModule } from '@ionic/storage';



import { RegisterPage } from '../pages/register/register';


import { UserProvider } from '../providers/user-provider';
import { AuthProvider } from '../providers/auth-provider';
import { EnrollProvider } from '../providers/enroll-provider';




import { HttpModule } from '@angular/http';


import { NFC, Ndef } from '@ionic-native/nfc';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EnrollementPage,  
    LoginPage,
    RegisterPage,
    TestPage

    
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
    HomePage,
    EnrollementPage,
    LoginPage,
    RegisterPage,
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NFC,
    Ndef,
    UserProvider,
    AuthProvider,
    EnrollProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
