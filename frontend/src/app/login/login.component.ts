import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: any = 'fael';
  senha: any;

  constructor(private router: Router, private dialog:MatDialog) { 

  }

  ngOnInit(): void {
  }

  teste(){
    //this.router.navigate(['/app-teste'])
    //console.log(this.login)
    this.dialog.open(modalLoginComponent)
  }

}

@Component({
  selector: 'qualquercoisa-modal',
  templateUrl: './modalLogin.component.html'
})
export class modalLoginComponent{

  constructor(private router: Router) { 

  }
}