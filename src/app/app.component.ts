import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre    :string  ='Batman';
  nombre2   :string  ='RafAeL CaNdIleJO AlVarAdo'    
  activar   :boolean =true;
  PI        :number  =Math.PI;
  nombre3   :string  ='Batman12348 TDKR@';
  porcentaje:number  =0.235;
  salario   :number  =1234.5;
  fecha     :Date    =new Date();
  idioma    :string  ='es';
  videourl  :string  ='https://www.youtube.com/embed/LTZ30Yhk9pQ'
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
