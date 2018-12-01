import { Injectable } from "@angular/core";
import { Lista } from '../../models/lista.model';

@Injectable()
export class TareasService{

    lista: Lista[] = [];
        constructor(){

            this.cargarStorage();
           // const lista1 = new Lista('recolectar piedras');
           // const lista2 = new Lista('recolectar basura');

            // this.lista.push(lista1, lista2);
            // console.log(this.lista);
        }
        agregarLista(lista:Lista){
            this.lista.push(lista);
            this.guardarStorage();
        }
        borrarLista(lista:Lista){

            this.lista = this.lista.filter(listaData =>{
                return listaData.id !== lista.id
            });

            this.guardarStorage();
        }

        guardarStorage(){
            localStorage.setItem('data',JSON.stringify(this.lista));
        }
        cargarStorage(){

            if(localStorage.getItem('data')){
                this.lista = JSON.parse( localStorage.getItem('data'));
            }else{
                this.lista = [];
            }

        }

}