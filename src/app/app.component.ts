import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre     :string  ='Batman';
  PI         :number  =Math.PI;
  porcentaje :number  =0.235;
  salario    :number  =1234.5;
  fecha      :Date    =new Date();
  idioma     :string='es';
  array =[1,2,4,4,5,6,7,8,9,10];
  valorpro=new Promise<string>((resolve) =>{
    setTimeout(() => {
      resolve('llego la data')  
    }, 4500);
  });

  heroe={
    nombre:'Bruce W',
    clave:'BATMAN',
    EDAD:45,
    direccion:{
      calle:'Primera',
      casa:20
    }
  }
}
