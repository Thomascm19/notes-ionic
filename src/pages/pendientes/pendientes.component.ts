import { Component } from '@angular/core';
import { TareasService } from '../../app/services/tareas.service';
import { Lista } from '../../models/lista.model';




@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
    
})
export class PendientesPage {

    constructor( public tareasService: TareasService){

    }
    listaSeleccionada(lista:Lista){ 
        console.log( lista );
        
    }

}
