import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class EvenementFeatureService {

    url:string = "http://localhost:8080/evenements";

    constructor( private http: HttpClient) {

     }

     getEvenement(){
         return this.http.get(this.url);
     }
    
}