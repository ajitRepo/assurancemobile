import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { CarsProvider } from '../../providers/cars-provider';
import { Hero } from '../../providers/hero';

import { PopoverComponent } from '../../components/popover/popover';
import { Voiture } from '../../components/voiture/voiture';
import { Chauffeur } from '../../components/chauffeur/chauffeur';



 


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

  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];

  myHero = this.heroes[0];

  voitures = new Voiture();
  
  //mycar = this.voitures[0];

  constructor(private app:App, public http: Http, public CarsService: CarsProvider, public navParams: NavParams) {
    
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

  }
  loadData() {
    this.CarsService.getCars().subscribe(data =>{
      
      let d = JSON.parse(JSON.stringify(data.values.Voiture));
      //console.log(d[1]);
      //console.log(d.values.Voiture[1])
     // console.log(d.values.Voiture.length) */
     this.voitures[1]=d[1];
     //console.log(this.voitures[1]);
      for (var i = 0; i < d.length; i++) {
        this.voitures[i]=d[i];
        //console.log(this.voitures[i])
  
    } 
    console.log(this.voitures[2]);
  
    

      

      
    }, err => {
      console.log(err)
    });  
  }

}
