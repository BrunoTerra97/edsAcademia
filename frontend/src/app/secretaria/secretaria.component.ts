import { Component, OnInit } from '@angular/core';
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
    nome: "",
    cpf: null,
    identidade: null,
    dataNascimento: null,
    cartaoNumero: null,
    cartaoBandeira: null,
    cartaoProprietario: null,
    idModalidade: null
  };
  planoEscolhido: any;
  nomeSecretaria: any = "Fulano";
  usuarios: any;

  constructor(private service: GeralService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((value: any) => {
      this.usuarios = value.filter((usuario: any) => usuario.fichaSituacao == "true");
    })
  }

  canFinish(isHouse: boolean) {
    return this.aluno.aprovado;
  }
}
