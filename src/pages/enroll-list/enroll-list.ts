import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { CarsProvider } from '../../providers/cars-provider';
import { PopoverComponent } from '../../components/popover/popover';

 


/**
 * Generated class for the EnrollListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enroll-list',
  templateUrl: 'enroll-list.html',
})
export class EnrollListPage {
  @ViewChild('')

  public items:any;
  public isSearchbarOpened = false;

  constructor(private app:App, public http: Http, public CarsService: CarsProvider, public navParams: NavParams) {
    this.loadData();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrollListPage');
  }
  onSearch(event){
    console.log(event.target.value);

  }
  loadData() {
    this.CarsService.getCars();
  }

}
