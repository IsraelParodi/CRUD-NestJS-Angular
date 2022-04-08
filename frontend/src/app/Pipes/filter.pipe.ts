import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "../models/Product";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], filterString: string) {
    if (!products || !filterString) {
      return products;
    }

    return products.filter(product => product.name.toLowerCase().includes(filterString.toLowerCase()));
  }

}
