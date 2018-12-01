import { Component } from '@angular/core';
import { TareasService } from '../../app/services/tareas.service';
import { Lista } from '../../models/lista.model';
import { NavParams } from 'ionic-angular';




@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
    
})
export class AgregarPage {

    lista:Lista;

    constructor( public tareasService: TareasService,
                 private navParams: NavParams){                    
                    
            const titulo = this.navParams.get('titulo');

            this.lista = new Lista(titulo);
    }

}
