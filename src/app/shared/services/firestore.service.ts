import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  //referenciamos coleccion en la base de datos
  private usuarioCollection : AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) {
    this.usuarioCollection = this.database.collection<Usuario>('usuarios')
  }
  agregarUsuario(usuario: Usuario, id: string){
    //resolve -> resuelto ( similar al then )
    //Reject -> rechazo (similar al catch)
    return new Promise(async(resolve, reject) => {
      //Hace una captura de los datos -> similar screenshot
      try{
        usuario.uid = id;

        const resultado = await this.usuarioCollection.doc(id).set(usuario);
        resolve(resultado)
      } catch(error){
        //retornará el error
        reject(error)
      }
    })
  }
}

