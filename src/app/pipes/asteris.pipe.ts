import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asteris'
})
export class AsterisPipe implements PipeTransform {

  transform(value: string, todas:boolean=true): string {
   //return (todas)?'*'.repeat(value.length):value;
   //let nombre=value;
   if(todas){
   return value.replace(/[a-zA-Z@0-9  ]/g, '*');
   }
   return value;
}
}





