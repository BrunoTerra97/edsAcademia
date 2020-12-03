import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GeralService } from '../services/geral.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss'],
})
export class ProfessorComponent implements OnInit {
  formTreino: any;
  formExercicio: any;
  alunos: any;
  professor: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: GeralService,
    private router: Router
  ) {
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
  treinos: any;
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
  ngOnInit(): void {
    if (history.state.data == null) {
      this.router.navigate(['app-login']);
    }
    this.professor = history.state.data;
    console.log(history.state.data);
    this.service.getAlunos().subscribe((value: any) => {
      this.alunos = value.filter((aluno: any) => aluno.tipoUsuario == 'aluno');
      console.log(this.alunos);
    });
  }
  getAluno() {
    let info = {
      login: this.selectedAluno.login,
      senha: this.selectedAluno.senha,
    };
    this.service.login(info).subscribe((aluno: any) => {
      console.log(aluno.usuario[0]);
      this.treinos = aluno.usuario[0].treinos;
    });
  }
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
