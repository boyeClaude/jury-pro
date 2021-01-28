import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  _email: string = 'john@.gmail.com'
  _password: number = 123;

  email = new FormControl('');
  password = new FormControl('');

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  isAuthenticated(email, password){
    if (email == this._email && password == this._password) {
      this.navigateToAdmin();
    }
  }

  navigateToAdmin(){
    this._router.navigateByUrl('/admin');
  }

}
