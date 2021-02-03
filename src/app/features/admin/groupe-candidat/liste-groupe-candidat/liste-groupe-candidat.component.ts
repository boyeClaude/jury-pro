import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-liste-groupe-candidat',
    templateUrl: 'liste-groupe-candidat.component.html'
})

export class ListeGroupeCandidatComponent {
    constructor(private _router:Router) { }

    AjouterGroupeCandidat(){
        this._router.navigate(['/admin/groupe-candidat/add']);
    }
}