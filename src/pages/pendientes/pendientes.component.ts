import { Component } from '@angular/core';
import { TareasService } from '../../app/services/tareas.service';
import { Lista } from '../../models/lista.model';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';





@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
    
})
export class PendientesPage {

    constructor( public tareasService: TareasService,
                private navCtrl: NavController){

    }
    listaSeleccionada(lista:Lista){ 
        console.log( lista );
        
    }
    agregarLista(){
            

        this.navCtrl.push(AgregarPage);
    }

}
