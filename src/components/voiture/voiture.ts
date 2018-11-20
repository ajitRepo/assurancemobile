import { Component, Input } from '@angular/core';

/**
 * Generated class for the VoitureComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */


@Component({
  selector: 'voiture',
  templateUrl: 'voiture.html'
})
export class Voiture {  
  @Input()
    public matricule:string;
    public marque:string;
    public model:string;
    public usage:string;
    public puissance:number;
    public typeCarburant:string;
    public nombrePlaces:number

   constructor() {
    console.log('Hello VoitureComponent Component');
    
  } 

}
