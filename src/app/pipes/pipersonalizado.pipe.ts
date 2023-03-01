import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipersonalizado'
})
export class PipersonalizadoPipe implements PipeTransform {

  transform(value: string, todas:boolean=true): string {
    value =value.toLocaleLowerCase();
    //corta la cadena
    let nombres=value.split(' ');
    console.log(value,'value');
    console.log(nombres,'nombres');
    if (todas){
      nombres=nombres.map(nombre=>{
        return nombre[0].toUpperCase() + nombre.substring(1);
      })
      return nombres.join(' ');
    }
    else{
      nombres[0]=nombres[0][0].toUpperCase()+nombres[0].substring(1);
    }
    return nombres.join(' ');
  }

}
