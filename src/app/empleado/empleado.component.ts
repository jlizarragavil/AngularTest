import { Component } from '@angular/core';
import { Empleado } from './empleado';
@Component({
    selector: 'empleado',
    templateUrl:'./empleado.component.html',
   // template:`
   // <h2>{{nombre_componente}}</h2>
   // <p>{{listado_frutas}}</p>
   // `
})
export class EmpleadoComponent{
    //public empleado = 'Empleados';
    //public cargos:String;
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajadorExterno:Boolean;
    public color:string;
    public colorSeleccionado:string;
    constructor(){
        this.empleado = new Empleado('Jose Lizarraga', 26, 'Cocinero', false);
        this.trabajadores = [
            new Empleado('Jose Lizarraga', 26, 'Cocinero', true),
            new Empleado('Arianna alvarado', 26, 'Jefa', true),
            new Empleado('Gato', 26, 'Amo y señor', false)
        ];
        this.trabajadorExterno = false;
        this.color = "green";
        this.colorSeleccionado = "#ccc";
    }
    ngOnInit(){
        
        console.log(this.trabajadores)
    }

    cambiarExterno(valor:boolean){
        this.trabajadorExterno = valor;
    }
    logColorSeleccionado(){
        console.log(this.colorSeleccionado)
    }
}