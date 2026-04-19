import { Pipe,PipeTransform } from "@angular/core";
@Pipe({
    name:'reverse',
    standalone:true
})
export class ReversePipe implements PipeTransform{
    transform(value: string):string{
        return value.split('').reverse().join('');
        
    }
}
//hello =>'h','e','l','l','o' => 'o','l','l','e','h' => 'olleh'