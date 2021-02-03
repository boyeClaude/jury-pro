import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-liste-candidat',
    templateUrl: 'liste-candidat.component.html'
})

export class ListeCandidatComponent  {
    constructor(private _router: Router) { }

    AjouterCandidat(){
        this._router.navigate(['/admin/candidat/add']);
    }
}