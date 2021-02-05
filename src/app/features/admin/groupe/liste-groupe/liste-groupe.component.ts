import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-liste-group',
    templateUrl: 'liste-groupe.component.html'
})

export class ListeGroupeComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() { }

    AjouterGroupe(){
        this._router.navigate(['/admin/groupe/add']);
    }
}