import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finisedAirirng',
  standalone: true,
})
export class FinisedAirirngPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value == 'Finished Airing') {
      return 'Status: Complete';
    } else {
      return 'Status OnGoing';
    }
  }
}
