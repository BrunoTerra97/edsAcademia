import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  constructor() {}

  aluno: any = getLocaleFirstDayOfWeek;
  showTreino = false;
  showTabela = true;

  onClick() {
    console.log(this.aluno);
    this.showTabela = !this.showTabela;
  }

  horarios = [
    '6:30',
    '7:00',
    '7:30',
    '8:00',
    '8:30',
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ];

  segunda = [
    'Crossfit',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
  ];

  terca = [
    'X',
    'X',
    'X',
    'X',
    'X',
    'Crossfit',
    'Natação',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
  ];

  quarta = [
    'X',
    'X',
    'X',
    'X',
    'Natação',
    'Crossfit',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
  ];

  quinta = [
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
  ];

  sexta = [
    'X',
    'X',
    'X',
    'X',
    'X',
    'Natação',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
  ];

  sabado = [
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
  ];

  domingo = [
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
    'X',
  ];

  ngOnInit(): void {
    this.aluno = history.state.data;
  }
}
