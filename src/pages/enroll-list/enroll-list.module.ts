import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnrollListPage } from './enroll-list';

@NgModule({
  declarations: [
    EnrollListPage,
  ],
  imports: [
    IonicPageModule.forChild(EnrollListPage),
  ],
})
export class EnrollListPageModule {}
