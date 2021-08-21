import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(valor: string, enMuyusculas: boolean = true): string {
        // if (enMuyusculas) {
        //     return valor.toUpperCase();
        // } else {
        //     return valor.toLocaleLowerCase();
        // }
        return (enMuyusculas) ? valor.toUpperCase(): valor.toLocaleLowerCase();
    }   
}