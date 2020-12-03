import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeralService {

  usuarios: any;

  constructor(private http: HttpClient) {}

  getUsersAllowed() {
    this.usuarios = this.http.get('localhost:3333/usuarios');
    return this.usuarios.filter( (usuario: any) => usuario.fichaSituacao == "true")
  }
}