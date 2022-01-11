import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent {
  name: string = 'Alex';
  age: number = 25;

  mobiles: Mobile[] = [
    {
      id: 1001,
      name: 'Samsung',
      inStock: 0,
      price: 2200,
      country: 'Australia',
    },
    {
      id: 1002,
      name: 'Moto',
      inStock: 20,
      price: 30000,
      country: 'Australia',
    },
    {
      id: 1003,
      name: 'Sony',
      inStock: 60,
      price: 12000,
      country: 'Australia',
    },
  ];

  calcProds() {
    let tot = 0;

    for (let mobile of this.mobiles) {
      tot = tot + mobile.inStock;
    }

    return tot;
  }
}

interface Mobile {
  id: number;
  name: string;
  inStock: number;
  price: number;
  country: string;
}
