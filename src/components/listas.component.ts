import { Component, Input } from '@angular/core';
import { TareasService } from '../app/services/tareas.service';
import { Lista } from '../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
    
})
export class ListasComponent {

    @Input() terminada:boolean = false;

    
    constructor( public tareasService: TareasService,
                private navCtrl: NavController,
                private alertCtrl: AlertController){

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
    editarLista(lista:Lista){

        const alerta = this.alertCtrl.create({
            title: 'Editar Nombre',
            message: 'Editar nombre de la lista',
            inputs:[{
                name:'titulo',
                placeholder: 'Nombre de la lista',
                value: lista.titulo
            }],
            buttons: [{
                text: 'Cancelar'
            },{
                text: 'Guardar',
                handler: data =>{
                    if(data.titulo.length === 0){
                        return;
                    }
                   lista.titulo = data.titulo;
                   this.tareasService.guardarStorage();

                }
            }]
        });
        alerta.present();
      }

}
