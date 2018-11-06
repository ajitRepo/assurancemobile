import {Injectable} from '@angular/core';
import {Http} from '@angular/http'

//RxJS
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { AssuranceUser } from '../models/assurance-user.model';


@Injectable()
export class AssuranceService {

    private baseUrl: String = 'http://212.71.244.7:8080/assurance';
    private action:String;
    

    constructor (private http:Http){

    }

    public getUser() {
        const url = `${this.baseUrl}/${this.action}`;
        //return this.http.get(url);
        return console.log(url);

    }
   
}