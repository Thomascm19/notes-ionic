import { Injectable } from "@angular/core";
import { Lista } from '../../models/lista.model';

@Injectable()
export class TareasService{

    listas: Lista[] = [];
        constructor(){
            const lista1 = new Lista('recolectar piedras');
            const lista2 = new Lista('recolectar basura');

            this.listas.push(lista1, lista2);
            console.log(this.listas);
        }
}