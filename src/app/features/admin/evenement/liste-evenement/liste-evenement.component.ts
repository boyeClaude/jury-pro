import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListeEvenementService } from './liste-evenement.service';


@Component({
    selector: 'app-liste-evenement',
    templateUrl: 'liste-evenement.component.html'
})

export class ListeEvenementComponent implements OnInit {
    constructor(private _router: Router, private listeEvenementService:ListeEvenementService) { }

    ngOnInit() {
        this.getAllEvenement();
    }

    AjouterEvenement(){
        this._router.navigate(['/admin/evenement/add']);
    }

    getAllEvenement(){
        this.listeEvenementService.getAllEvenement().subscribe( (response) => console.log(response));
    }


}