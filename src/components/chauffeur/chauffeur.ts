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

  constructor(public nom:string,
    public prenom:string,
    public idnfc:string,
    public telephone:string,
    public proprietaire:boolean,
    public id:number) {
    console.log('Hello ChauffeurComponent Component');
    
  }

}
