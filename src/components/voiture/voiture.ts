import { Component, Input } from '@angular/core';
import { Chauffeur } from '../../components/chauffeur/chauffeur';


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
    public chauffeurs:Chauffeur;

    public marque:string;
    public matricule:string;
    public model:string;
    public nombrePlaces:number;
    public puissance:number;
    public typeCarburant:string;
    public usage:string;

   constructor() {
    console.log('Hello VoitureComponent Component');
    
  } 

}
