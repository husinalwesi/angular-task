import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leadingZero'
})
export class LeadingZeroPipe implements PipeTransform {

  transform(number: number): string {
    // Putting the leading zero.
    let result = String(number);
    return result.length == 1 ? "0" + result : result;
  }
}
