import { Component, OnInit } from '@angular/core';
import { GeralService } from '../services/geral.service';

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

  aluno = {
    nomeCompleto: "",
    fichaPeso: null,
    fichaAltura: null,
    fichaPressao: null,
    fichaPercentualGordura: null,
    fichaPercentualMassaMagra: null,
    fichaIMC: null,
    fichaSituacao: false
  };
  nomeMedico: any = "Fulano";
  // aprovado: any = false;
  // nome: any;
  // peso: any;
  // altura: any;
  // pressao: any;
  // gordura: any;
  // massaMagra: any;
  // imc: any;

  constructor(private service: GeralService) { }

  ngOnInit(): void {
    //getUser();
  }
}
