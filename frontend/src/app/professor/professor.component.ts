import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss'],
})
export class ProfessorComponent implements OnInit {
  formTreino: any;
  formExercicio: any;

  constructor(private formBuilder: FormBuilder) {
    this.formTreino = this.formBuilder.group({
      name: '',
      group: '',
    });
    this.formExercicio = this.formBuilder.group({
      repeticoes: '',
      aparelho: '',
      tempo: '',
      intervalo: '',
      carga: '',
    });
  }
  treino = false;
  exercicio = false;
  selectedAluno: any;
  alunos = [
    {
      name: 'Rafael',
      frequency: 7,
    },
    {
      name: 'Boi',
      frequency: 2,
    },
  ];
  treinos = [
    {
      name: 'treino 1',
      group: 'coxa',
    },
  ];
  selectedGroup: any;
  newTreino: any;
  exercicios: any[] = [];

  onTreinoSubmit(treinodata: Treino) {
    this.newTreino = treinodata;
    console.log(this.newTreino);
  }
  onExercicioSubmit(exerciciodata: Exercicio) {
    this.exercicios.push(exerciciodata);
    console.log(this.exercicios);
  }
  ngOnInit(): void {}
}

export interface Treino {
  name: string;
  group: string;
  exercicios?: Exercicio[];
}

export interface Exercicio {
  repeticoes: number;
  aparelho: string;
  tempo?: number;
  intervalo: number;
  carga: number;
}
