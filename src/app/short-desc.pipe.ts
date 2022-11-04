import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDesc',
})
export class ShortDescPipe implements PipeTransform {
  transform(value: string, maxLength: number = 100): string {
    if (value) {
      return value.slice(0, maxLength) + '...';
    }
    return value;
  }
}
