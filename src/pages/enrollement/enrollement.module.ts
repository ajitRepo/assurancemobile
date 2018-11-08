import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnrollementPage } from './enrollement';

@NgModule({
  declarations: [
    EnrollementPage,
  ],
  imports: [
    IonicPageModule.forChild(EnrollementPage),
  ],
})
export class EnrollementPageModule {}
