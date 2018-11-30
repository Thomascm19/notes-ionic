import { Component } from '@angular/core';
import { TareasService } from '../../app/services/tareas.service';



@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
    
})
export class PendientesPage {

    constructor( public tareasService: TareasService){

    }

}
