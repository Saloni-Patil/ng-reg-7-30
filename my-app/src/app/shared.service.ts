import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  calcProds(products: any) {
    let tot = 0;

    for (let product of products) {
      tot = tot + product.inStock;
    }

    return tot;
  }
}
// ng g s shared
