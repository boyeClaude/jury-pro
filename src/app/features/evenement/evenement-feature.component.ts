import { Component, OnInit } from '@angular/core';
import { EvenementFeatureService } from './evenement-feature.service';

@Component({
    selector: 'app-evenement-feature',
    templateUrl: 'evenement-feature.component.html'
})

export class EvenementFeatureComponent implements OnInit {
    constructor(private evenementService:EvenementFeatureService) { }

    ngOnInit() { 
        this.evenementService.getEvenement().subscribe((data) =>{
            console.log(data);
            
        })
    }
}