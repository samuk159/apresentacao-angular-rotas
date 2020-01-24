import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor() { }

  login() {
    this.usuarioAutenticado = true;
    this.mostrarMenuEmitter.emit(true);
  }

  isUsuarioAutenticado() {
    return this.usuarioAutenticado;
  }
}
