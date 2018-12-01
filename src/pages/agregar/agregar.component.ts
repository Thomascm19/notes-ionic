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

            if(this.navParams.get('lista')){

                this.lista = this.navParams.get('lista');
            }else{

                this.lista = new Lista(titulo);

                this.tareasService.agregarLista(this.lista);
            }

            
    }

    agregarItem(){

        if(this.nombreItem.length === 0){
            return;
        }
        const nuevoItem = new ListaItem(this.nombreItem);

        this.lista.items.push(nuevoItem);

        //Se llama el metodo para guardar los items en el localStorage
        this.tareasService.guardarStorage();

        this.nombreItem = "";
    }
    actualizarTarea(item: ListaItem){
        item.completado = !item.completado;

        //Se cuentan las tareas del arreglo que estan sin el check 
        const pendientes = this.lista.items.filter(itemData => {
            return !itemData.completado;
        }).length; // <= Se muestan cuantos items estan son el check
        //console.log("pendientes");
        
        if(pendientes === 0){
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }else{
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }

//Se llama el metodo para guardar los items seleccionados 
        this.tareasService.guardarStorage();
    }
    borraritem(idx:number){
        this.lista.items.splice(idx,1);
        //Se llama el metodo para eliminar los items completados
        this.tareasService.guardarStorage();
    }

}
