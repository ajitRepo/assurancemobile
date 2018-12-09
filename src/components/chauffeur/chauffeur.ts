import { Component } from '@angular/core';

/**
 * Generated class for the ChauffeurComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chauffeur',
  templateUrl: 'chauffeur.html'
})
export class Chauffeur {
    public id:number;
    public idnfc:string;
    public nom:string;
    public prenom:string;
    public proprietaire:boolean;
    public telephone:string;

  constructor() {
    console.log('Hello ChauffeurComponent Component');
    
  }

}
