import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GeralService } from '../services/geral.service';

interface Habilitacao {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  //ausculta: any = ["Aprovado", "Reproavdo"];
  exames: Habilitacao[] = [
    {value: "true", viewValue: 'Aprovado'},
    {value: "false", viewValue: 'Reprovado'}
  ];
  aprovacaos: Habilitacao[] = [
    {value: "true", viewValue: 'Sim'},
    {value: "false", viewValue: 'Não'}
  ];

  aluno = {
    nomeCompleto: "",
    tipoUsuario: "aluno",
    fichaPeso: "",
    fichaAltura: "",
    fichaPressao: "",
    fichaPercentualGordura: "",
    fichaPercentualMassaMagra: "",
    fichaIMC: "",
    fichaSituacao: ""
  };
  nomeMedico: any = "Fulano";
  medico: any;

  constructor(
    private service: GeralService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (history.state.data == null) {
      this.router.navigate(['app-login']);
    }
    this.medico = history.state.data;
  }

  cadastrar(){
    console.log(this.aluno)
    this.service.insertUser(this.aluno).subscribe((value: any) => {
      this._snackBar.open('Usuario cadastrado com sucesso!', 'Fechar', {
        duration: 4000,
      });
    }, (error: any) => {
      this._snackBar.open('Erro no cadastro!', 'Fechar', {
        duration: 4000,
      });
    })
  }
}
