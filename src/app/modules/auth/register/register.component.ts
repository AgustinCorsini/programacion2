import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Usuario } from "src/app/models/usuario";
import { FirestoreService } from 'src/app/shared/services/firestore.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  hide = true;

  //definimos de forma publica el servicioAuth
  constructor(public servicioAuth:AuthService,
  public servucioAuth: AuthService,
  public servicioFirestore: FirestoreService,
  public router: Router,
  ){}

  //importacion del modelo
  usuarios: Usuario = {
    uid: '',
    nombre1: '',
    nombre: '',
    rol: '',
    contrasena: ''
}

uid=''
colleccionUsuarios: Usuario[] = [];

  //
  async registrarse(){
    const credenciales = {
      nombre: this.usuarios.nombre,
      contraseña: this.usuarios.contrasena
    };

    const res = await this.servicioAuth.registrar(credenciales.nombre, credenciales.contraseña)

    //metodo THEN devuelve la misma promesa
    .then(res=>{
      alert("Ha agregado un nuevo usuario con exito")

      this.router.navigate(["/inicio"]);
    })

    //metodo CATCH creara un error en caso de que algo salga mal
    .catch(error =>
      alert("Hubo error al crear un usuario :( \n" + error))

      const uid = await this.servicioAuth.getUid();
      //referenciamos uid con el nuevo usuario
      this.usuarios.uid=uid;
      //llamamos la funcion guardar user
      this.guardarUser();
  }

  //funcion asincronica para guardar usuarios
  async guardarUser(){
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);
    })
    .catch(error =>
      {
        console.log('Error =>', error)
      })
  }


  async ngOnInit(){
    const uid = await this.servicioAuth.getUid();
    console.log(uid);
  }
}



/*
modulos -->componentes
metadatos-->declaraciones - importaciones

componentes:

*/
