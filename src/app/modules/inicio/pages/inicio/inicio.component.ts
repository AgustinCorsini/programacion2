import { Component, OnInit } from '@angular/core';
import { TarjetasInicio } from 'src/app/models/models';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  public info: TarjetasInicio[];

  constructor(){
    this.info = [
      {
        titulo:"Tarjeta 1",
        descripcion:"BOOOOOOCA BOCA BOCAAAA",
        imagen:"https://material.angular.io/assets/img/examples/shiba2.jpg",
        alt:"perro",
      }
    ];
  }

  ngOnInit(): void{

  }
}
