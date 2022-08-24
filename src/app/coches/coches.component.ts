import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';
import { Coche } from './coche';
@Component({
    selector: 'coches',
    templateUrl:'./coches.component.html',
    providers:[PeticionesService]
})

export class CochesComponent{
    public coche:Coche;
    public coches:Array<Coche>
    public articulos:any;
    constructor(
        private _PeticionesService: PeticionesService
    ){
        this.coche = new Coche("","","");
        this.coches = [new Coche("Seat","123","Rojo"),new Coche("Opel","321","Blanco"),new Coche("Honda","4","Gris")];
    
    }
    ngOnInit(){
        console.log(this._PeticionesService.getPrueba())
        this._PeticionesService.getArticulos().subscribe(
            result =>{
                this.articulos = result;
                console.log(result)
                if(!this.articulos){
                    console.log("Error en el servidor");
                }
            },
            error =>{
                var err = <any>error;
                console.log(err);
            }
        );
    }

    onSubmit(){
        console.log(this.coche)
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }
    //.pipe(map(res => res.json()));
}