import { Injectable } from '@angular/core';
import { HttpClientModule, HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PeticionesService{
    public url:string;

    constructor(private _http:HttpClient){
        this.url="https://jsonplaceholder.typicode.com/posts";
    }

    getPrueba(){
        return "Hola desde servicio";
    }

     //.pipe(map(res => res.json()));
    getArticulos(){
        return this._http.get(this.url);
    }


}