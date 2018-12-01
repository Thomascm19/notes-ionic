import { Component } from '@angular/core';
import { TareasService } from '../../app/services/tareas.service';
import { Lista } from '../../models/lista.model';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
    
})
export class TerminadosPage {
    
    constructor( public tareasService: TareasService){

    }
    listaSeleccionada(lista:Lista){ 
        console.log( lista );
        
    }

}
