import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnrollmentPage } from './enrollment';

@NgModule({
  declarations: [
    EnrollmentPage,
  ],
  imports: [
    IonicPageModule.forChild(EnrollmentPage),
  ],
})
export class EnrollmentPageModule {}
