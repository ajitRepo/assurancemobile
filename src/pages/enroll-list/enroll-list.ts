import { Component, ViewChild, NgModule } from '@angular/core';
import { IonicPage, NavParams, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { CarsProvider } from '../../providers/cars-provider';
import { Voiture } from '../../components/voiture/voiture';




 


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

 
  voitures = new Voiture();
  
  //voitures: Array<Voiture>[];
  get key(){
    return Object.keys(this.voitures);
  }


  constructor(private app:App, public http: Http, public CarsService: CarsProvider, public navParams: NavParams) {
    console.log(this.key);
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadData();
    
  } 
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrollListPage');
   
  }
  onSearch(event){
    console.log(event.target.value);
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    const val = event.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
    
  loadData() {
    
    this.CarsService.getCars().subscribe(data =>{
    
       this.voitures = JSON.parse(JSON.stringify(data.values.Voiture));

    }, err => {
      console.log(err)
      let e = err.status
      console.log(err.status);
      if(e===0){
        this.loadData()
      }

    });  
  }
  

}
