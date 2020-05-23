import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'const'
})
export class ConstPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let resultado = "";
    if (value==true) {
      resultado="Solicitado";
    } else {
      resultado="No Solicitado";
    }
    return resultado;
  }

}
