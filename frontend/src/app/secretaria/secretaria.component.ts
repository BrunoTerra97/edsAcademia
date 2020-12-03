import { Component, OnInit } from '@angular/core';
import { GeralService } from '../services/geral.service';

interface Habilitacao {
  value: boolean;
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
  aluno: any = {
    nome: "",
    ausculta: null,
    pressao: null,
    anamnese: null,
    peso: null,
    altura: null,
    valorPressao: null,
    gordura: null,
    massaMagra: null,
    imc: null,
    aprovado: false
  };
  nomeSecretaria: any = "Fulano";
  alunos: any;

  constructor(private service: GeralService) { }

  ngOnInit(): void {
    this.alunos = getUsersAllowed()
  }

  canFinish(isHouse: boolean) {
    return this.aluno.aprovado;
  }
}
