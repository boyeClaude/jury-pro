import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-liste-evenement',
    templateUrl: 'liste-evenement.component.html'
})

export class ListeEvenementComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() { }

    AjouterEvenement(){
        this._router.navigate(['/admin/evenement/add']);
    }
}