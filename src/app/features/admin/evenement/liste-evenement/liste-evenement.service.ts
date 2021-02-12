import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListeEvenement } from 'src/app/core/interfaces/liste-evenement';

@Injectable({providedIn: 'root'})
export class ListeEvenementService {

    constructor(private _http: HttpClient) {}

    getAllEvenement(){
        return this._http.get<IListeEvenement[]>('http://localhost:8080/evenements');
    }
}