import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from "src/app/models/usuario";
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;

  //definimos de forma publica el servicioAuth
  constructor(public servicioAuth:AuthService){}

  usuario: Usuario = {
    uid: '',
    nombre: '',
    contrasena: ''
}

  //
  async registrarse(){
    const credenciales = {
      nombre: this.usuario.nombre,
      contraseña: this.usuario.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contraseña)
    .then(res=>{
      alert("Ha agregado un nuevo usuario con exito")
    })

    console.log(res)
  }
}
