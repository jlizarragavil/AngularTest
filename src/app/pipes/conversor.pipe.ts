import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'conversor' })
export class ConversorPipe implements PipeTransform{
    transform(value:any, por:any){
        let value_one = parseInt(value);
        let value_two = parseInt(por);

        return "La multiplicacion: " + value_one + " x " + value_two + "=" + (value_one * value_two);
    }
}