import { Component, OnInit,AfterViewInit } from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit,AfterViewInit {

  constructor(private _googleAuth: AuthService) { }

  ngOnInit() {
    AppGlobals.GOOGLE_CLIENT_ID = '449875052890-cdb1o95m4lo9ivtev74fio3p4trfvc0c.apps.googleusercontent.com';
  }

  ngAfterViewInit(){
    
  }

  signIn() {
    this._googleAuth.authenticateUser(()=>{
      
     });
  }

}
