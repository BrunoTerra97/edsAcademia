import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeralService {

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('http://localhost:3333/usuarios');
  }

  getUser() {
    return this.http.get('http://localhost:3333/usuario');
  }

  insertUser(usuario: any) {
    return this.http.post('http://localhost:3333/usuario', usuario);
  }

  updateUser(usuario: any) {
    return this.http.put('http://localhost:3333/usuario', usuario);
  }

  login(login: any) {
    return this.http.post('http://localhost:3333/usuarioGet', login);
  }

  getAlunos() {
    return this.http.get('http://localhost:3333/usuarios');
  }
}
