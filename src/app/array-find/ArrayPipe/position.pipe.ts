import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'position',
  standalone: true
})
export class PositionPipe implements PipeTransform {

  transform(value: string[], element: string): number | string{
    let x = element;
    for(let i = 0; i<value.length; i++){
      if(x === value[i]){
        return i+1;
      }
    }
    return "Found Nothing";
  }

}
