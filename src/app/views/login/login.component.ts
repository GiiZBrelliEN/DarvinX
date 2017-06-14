import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  password;
  result;

  constructor() { }



  ngOnInit() {
    
  }
  
  LoginHandler(){
    if(this.username.length>0){
      console.log('this username: '+this.username+' and this passwd: '+this.password);
      this.username='';
      this.password='';
      this.result = 'Surprise Motherfucker!'
    }
  }
}
