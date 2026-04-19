import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name:'custom',
    standalone:true
})
export class CustomPipe implements PipeTransform{
    transform(value: string,prefix:string,suffix:string):string{
        return prefix+value+suffix;
        
        
    }
}