import { Component, Input } from '@angular/core';
import { TareasService } from '../app/services/tareas.service';
import { Lista } from '../models/lista.model';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
    
})
export class ListasComponent {

    @Input() terminada:boolean = false;

    
    constructor( public tareasService: TareasService,
                private navCtrl: NavController){

    }
    listaSeleccionada(lista:Lista){ 
        
        this.navCtrl.push(AgregarPage,{
            titulo: lista.titulo,
            lista: lista
        });
        
    }

    borrarLista(lista: Lista){

        this.tareasService.borrarLista(lista);

    }

}
