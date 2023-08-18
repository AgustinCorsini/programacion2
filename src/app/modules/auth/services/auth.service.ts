import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from "src/app/models/usuario";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //referenciar la autenticacion de firebase
  constructor(public auth:AngularFireAuth) { }
  //importacion del modelo
  usuario: Usuario = {
    uid: '',
    nombre: '',
    contrasena: ''
  }

  registrar (nombre:string, contraseña:string){
    //retorna nuevo informacion de registro
    {return this.auth.createUserWithEmailAndPassword(nombre,contraseña)}
  }
}
