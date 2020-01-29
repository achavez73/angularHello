import{Injectable} from '@angular/core';

@Injectable({
    providedIn : 'root'
})

export class UsuariosService{

getUsuarios(){

    return [
        {"id":1, "nombre": "luis", "edad": 23, "hobby":"nadar"},
        {"id":2, "nombre": "Mario", "edad": 25, "hobby":"correr"},
        {"id":3, "nombre": "Beto", "edad": 28, "hobby":"escalar"},
        {"id":4, "nombre": "Manuel", "edad": 32, "hobby":"leer"}
    ];

}

}