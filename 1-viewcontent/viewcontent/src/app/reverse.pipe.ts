import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    //if

    return value.split('').reverse().join('');
  }

}
