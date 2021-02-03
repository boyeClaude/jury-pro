import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-liste-critere',
    templateUrl: 'liste-critere.component.html'
})

export class ListeCritereComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() { }

    AjouterCritere(){
        this._router.navigate(['/admin/critere/add']);
    }
}