import { Component } from '@angular/core';
import { TareasService } from '../../app/services/tareas.service';
import { Lista } from '../../models/lista.model';
import { NavParams } from 'ionic-angular';
import { ListaItem } from '../../models/lista-item.models';




@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
    
})
export class AgregarPage {

    lista:Lista;
    nombreItem:string = '';

    constructor( public tareasService: TareasService,
                 private navParams: NavParams){                    
                    
            const titulo = this.navParams.get('titulo');

            this.lista = new Lista(titulo);

            this.tareasService.agregarLista(this.lista);
    }

    agregarItem(){

        if(this.nombreItem.length === 0){
            return;
        }
        const nuevoItem = new ListaItem(this.nombreItem);

        this.lista.items.push(nuevoItem);

        this.nombreItem = "";
    }
    actualizarTarea(item: ListaItem){
        item.completado = !item.completado;
    }
    borraritem(idx:number){
        this.lista.items.splice(idx,1);
    }

}
