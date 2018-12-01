import { Component } from '@angular/core';
import { TareasService } from '../../app/services/tareas.service';
import { Lista } from '../../models/lista.model';




@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
    
})
export class AgregarPage {

    constructor( public tareasService: TareasService){

    }

}
