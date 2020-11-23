import { Pipe, PipeTransform } from '@angular/core';
import { IBooksResponse } from '../interfaces/book.interface';

@Pipe({
  name: 'filterArrayObjectByKeyValue'
})
export class FilterArrayObjectByKeyValuePipe implements PipeTransform {

  transform(arrayObject: IBooksResponse[] | null, key: string, value: string): IBooksResponse[] | null {
    if (!arrayObject || arrayObject.length === 0) return arrayObject;
    return arrayObject.filter((book: IBooksResponse) => {
      return book[key]
        ? book[key].toString().toLowerCase().includes(value.toLowerCase())
        : arrayObject;
    });
  }

}
