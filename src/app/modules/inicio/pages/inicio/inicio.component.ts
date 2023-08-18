import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/jugador';
// IMPORTAMOS NUESTRA INTERFAZ
import { TarjetasInicio } from 'src/app/models/modelos';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Jugador[];

  // INICIALIZA LA PROPIEDAD INFO
  constructor(){
    this.info = [
      {
        id:"m10",
        nombre:"MessiTeAmo",
        edad:"noimporta",
        imagen:"https://media.a24.com/p/54293f5307d2bae0d47c21b40ca7a1d4/adjuntos/296/imagenes/009/092/0009092018/1200x675/smart/messi-copajpg.jpg",
        alt:"messi"
      }  ,
      {
        id:"d10",
        nombre:"Marado",
        edad:"inmortal",
        imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Maradona-Mundial_86_con_la_copa.JPG/1200px-Maradona-Mundial_86_con_la_copa.JPG",
        alt:"diego"

      }
    ]
  {
    
        

      
    
  }


  }
  

  // EVENTO DE CONSTRUCCIÓN/ INICIALIZACIÓN
  ngOnInit(): void{
  }

}
