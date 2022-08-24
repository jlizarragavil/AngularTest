import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl:'./fruta.component.html',
   // template:`
   // <h2>{{nombre_componente}}</h2>
   // <p>{{listado_frutas}}</p>
   // `
})
export class FrutaComponent{
    //tipo de datos
    public nombre:String;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<string>;
    public cualquiera:Array<any>;
    constructor(){
        this.nombre = "Jose Lizarraga";
        this.edad = 26;
        this.mayorDeEdad = true;
        this.trabajos = ["Informatico", "Raton", "Casa"];
        this.cualquiera = ["Informatico", 23, "Casa"];
 
    }
    
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Maranja, Manzana, Pera y Sandia';
    
    ngOnInit(){
        this.holaMundo();

        //variables y alcance
        //var es global, let es a nivel de bloque
        var uno = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 3
            var dos = 88;

            console.log("dentro de if " + uno)
        }
        console.log("fuera de if " + uno)
    }

    holaMundo(){
        var nombre = this.cambiarNombre("Arianna");
        alert("Hola Mundo " + nombre);
    }
    cambiarNombre(nombre:String){
        var nombreCambiado = nombre
        return nombreCambiado;
    }
}
