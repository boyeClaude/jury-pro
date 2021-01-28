import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls:['admin.component.scss']
})
export class AdminComponent {
  constructor(private _router: Router) {}

  logout(){
    this._router.navigate(['/'])
  }
}
