import { Pipe, PipeTransform } from '@angular/core';
import { BookResponse } from '../interfaces/book.interface';

@Pipe({
  name: 'filterArrayObjectByKeyValue'
})
export class FilterArrayObjectByKeyValuePipe implements PipeTransform {

  transform(arrayObject: BookResponse[] | null, key: string, value: string): BookResponse[] | null {
    if (!arrayObject || !arrayObject.length) return arrayObject;
    return arrayObject.filter((book: BookResponse) => book[key].toString().toLowerCase().includes(value.toLowerCase()));
  }

}
