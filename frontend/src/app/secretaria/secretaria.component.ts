import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GeralService } from '../services/geral.service';

interface Habilitacao {
  value: boolean;
  viewValue: string;
}

interface Tipo {
  value: any;
  viewValue: string;
}

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretaria.component.html',
  styleUrls: ['./secretaria.component.scss']
})
export class SecretariaComponent implements OnInit {

  //ausculta: any = ["Aprovado", "Reproavdo"];
  exames: Habilitacao[] = [
    {value: true, viewValue: 'Aprovado'},
    {value: false, viewValue: 'Reprovado'}
  ];
  aprovacaos: Habilitacao[] = [
    {value: true, viewValue: 'Sim'},
    {value: false, viewValue: 'Não'}
  ];
  modalidades: Tipo[] = [
    {value: 0, viewValue: 'Natação'},
    {value: 1, viewValue: 'Crossfit'},
    {value: 2, viewValue: 'Spinning'},
    {value: 3, viewValue: 'Ritmos'},
    {value: 4, viewValue: 'Musculação'}
  ];
  planos: Tipo[] = [
    {value: 0, viewValue: 'Mensal'},
    {value: 1, viewValue: 'Semestral'},
    {value: 1, viewValue: 'Anual'}
  ];
  aluno: any = {
    id: "",
    login: "",
    senha: "",
    cpf: "",
    identidade: "",
    dataNascimento: "",
    cartaoNumero: "",
    cartaoBandeira: "",
    cartaoProprietario: "",
    idModalidade: ""
  };
  //
  planoEscolhido: any;
  //
  nomeSecretaria: any = "Fulano";
  secretaria: any;
  usuarios: any;

  constructor(
    private service: GeralService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (history.state.data == null) {
      this.router.navigate(['app-login']);
    }
    this.secretaria = history.state.data;
    this.service.getUsers().subscribe((value: any) => {
      this.usuarios = value.filter((usuario: any) => usuario.fichaSituacao == "true" || usuario.fichaSituacao == null);
    })
  }

  canFinish(isHouse: boolean) {
    return this.aluno.aprovado;
  }

  cadastrar(){
    console.log(this.aluno)
    this.service.updateUser(this.aluno).subscribe((value: any) => {
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
