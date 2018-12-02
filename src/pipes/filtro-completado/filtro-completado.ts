import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../models/lista.model';



@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(lista: Lista[], completada: boolean) {

    return lista.filter( lista =>{
      return lista.terminada === completada
    });
    
  }
}
