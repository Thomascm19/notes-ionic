import { Injectable } from "@angular/core";
import { Lista } from '../../models/lista.model';

@Injectable()
export class TareasService{

    lista: Lista[] = [];
        constructor(){
            const lista1 = new Lista('recolectar piedras');
            const lista2 = new Lista('recolectar basura');

            this.lista.push(lista1, lista2);
            console.log(this.lista);
        }
}