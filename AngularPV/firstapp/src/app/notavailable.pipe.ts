import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notavailable'
})
export class NotavailablePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

}
