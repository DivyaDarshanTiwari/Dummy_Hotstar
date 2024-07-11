import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTitleLength',
  standalone: true
})
export class ConvertTitleLengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.length >= 14){
      let title:string = value.slice(0,15) + "...";
      return title;
    }
    else if(value.length< 14){
      return value;
    }
    else{
      return "Title not Found"
    }
  }

}
