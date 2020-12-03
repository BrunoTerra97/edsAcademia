import { Component, OnInit } from '@angular/core';

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
