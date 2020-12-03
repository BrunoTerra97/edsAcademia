import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeralService {
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get('localhost:3333/usuario');
  }

  login(login: any) {
    return this.http.post('http://localhost:3333/usuarioGet', login);
  }
  getAlunos() {
    return this.http.get('http://localhost:3333/usuarios');
  }
}
