import{ PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'resumir'
})

export class ResumirPipe implements PipeTransform{

    transform(valor: string, limite? :any){
        if(!valor){
            return null;
        }
        
        let cantidadLimite = (limite) ? limite: 2;

        return valor.substr(0,cantidadLimite) + '...'
;    }
}