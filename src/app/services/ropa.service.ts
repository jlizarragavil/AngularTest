import { Injectable } from '@angular/core';


@Injectable()
export class RopaService{
    public nombrePrenda = 'pantalones vaqueros';
    public coleccionRopa = ['pantalones blancos', 'camiseta roja'];

    prueba(nombrePrenda:String){
        return nombrePrenda;
    }

    addRopa(prenda:string){
        this.coleccionRopa.push(prenda);
        this.getRopa();
    }

    getRopa(){
        return this.coleccionRopa;
    }

    deleteRopa(index:number){
        this.coleccionRopa.splice(index,1);
        this.getRopa();
    }

}