import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ListeEvenementService {

    constructor(private _http: HttpClient) {}

    getAllEvenement(){
        return this._http.get('http://localhost:8080/evenements');
    }
}