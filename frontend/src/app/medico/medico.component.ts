import { Component, OnInit } from '@angular/core';

interface Habilitacao {
  value: boolean;
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
    {value: true, viewValue: 'Aprovado'},
    {value: false, viewValue: 'Reprovado'}
  ];
  aprovacaos: Habilitacao[] = [
    {value: true, viewValue: 'Sim'},
    {value: false, viewValue: 'Não'}
  ];

  aluno: any = {
    nome: "",
    peso: null,
    altura: null,
    pressao: null,
    gordura: null,
    massaMagra: null,
    imc: null,
    aprovado: false
  };
  aprovado: any = false;
  nome: any;
  peso: any;
  altura: any;
  pressao: any;
  gordura: any;
  massaMagra: any;
  imc: any;
  nomeMedico: any = "Fulano";

  constructor() { }

  ngOnInit(): void {
  }

  canFinish(isHouse: boolean) {
    return this.aprovado;
  }

}
