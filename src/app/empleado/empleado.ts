export class Empleado{
    
    /*public nombre:String;
    public edad:number;

    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }*/
    constructor(
        public nombre:String,
        public edad:number,
        public cargo:String,
        public contratado:boolean
    ){

    }
}