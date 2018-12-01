import { Component } from '@angular/core';
import { TareasService } from '../../app/services/tareas.service';
import { Lista } from '../../models/lista.model';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';





@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
    
})
export class PendientesPage {

    constructor( public tareasService: TareasService,
                 private navCtrl: NavController,
                 private alertaCtrl: AlertController){

    }
    listaSeleccionada(lista:Lista){ 
        
        this.navCtrl.push(AgregarPage,{
            titulo: lista.titulo,
            lista: lista
        });
        
    }
    agregarLista(){

      const alerta = this.alertaCtrl.create({
          title: 'Nueva Lista',
          message: 'Nombre de la nueva lista que se desea',
          inputs:[{
              name:'titulo',
              placeholder: 'Nombre de la lista'
          }],
          buttons: [{
              text: 'Cancelar'
          },{
              text: 'Agregar',
              handler: data =>{
                  if(data.titulo.length === 0){
                      return;
                  }
                  this.navCtrl.push(AgregarPage,{
                      titulo: data.titulo
                  });
              }
          }]
      });
      alerta.present();
    }

}
