import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl:'./home.component.html',
    providers: [RopaService]
})
export class HomeComponent{
    public titulo = "Pagina principal homeComponent";
    public listadoRopa:Array<string>;
    public prendaParaGuardar:string;
    public fecha:Date;

    constructor(
        private _ropaService: RopaService
    ){
        this.fecha = new Date();
    }

    ngOnInit(){
        console.log(this._ropaService.prueba("Param"));
        this.listadoRopa = this._ropaService.getRopa();
        console.log(this.listadoRopa);
    }

    guardarPrenda(){
        this._ropaService.addRopa(this.prendaParaGuardar);
        this.prendaParaGuardar = "";
    }

    eliminarPrenda(i:number){
        this._ropaService.deleteRopa(i);
    }
}