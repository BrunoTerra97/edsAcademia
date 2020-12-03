import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeralService } from '../services/geral.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: any = 'fael';
  senha: any;

  constructor(private router: Router, private service: GeralService) {}

  ngOnInit(): void {}

  loginClick() {
    let loginInfo = {
      login: this.login,
      senha: this.senha,
    };

    this.service.login(loginInfo).subscribe((value: any) => {
      switch (value.usuario[0].tipoUsuario) {
        case 'aluno':
          this.router.navigate(['/app-user'], {
            state: { data: value.usuario[0] },
          });
          break;
        case 'professor':
          this.router.navigate(['/app-professor'], {
            state: { data: value.usuario[0] },
          });
          break;
        case 'secretaria':
          this.router.navigate(['/app-secretaria'], {
            state: { data: value.usuario[0] },
          });
          break;
        case 'medico':
          this.router.navigate(['/app-medico'], {
            state: { data: value.usuario[0] },
          });
          break;
      }
    });
    //this.dialog.open(modalLoginComponent)
  }
}
