import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: any = 'fael';
  senha: any;

  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }

  loginClick(){
    //this.router.navigate(['/app-teste'])
    console.log(this.login)
    //this.dialog.open(modalLoginComponent)
  }
}