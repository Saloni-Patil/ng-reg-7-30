import { Component, NgModule } from '@angular/core';

@Component({
  // meta data
  selector: 'app-start', // tag-name <app-start>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: ``, // UI
})
export class AppComponent {
  title = 'Hello Angular';

  names = ['Alex', 'Ashitosh', 'Ali'];

  student = {
    name: 'Alex',
    rNo: 10,
    city: 'Mumbai',
  };

  products = [
    {
      id: 1001,
      name: 'mobile',
      inStock: 20,
      price: 1200,
    },
    {
      id: 1002,
      name: 'Laptop',
      inStock: 20,
      price: 1200,
    },
    {
      id: 1003,
      name: 'BOOK',
      inStock: 10,
      price: 1200,
    },
  ];

  calcProds() {
    let tot = 0;

    for (let product of this.products) {
      tot = tot + product.inStock;
    }

    return tot;
  }

  // function calcProds(params:type) {

  // }

  // document.write(title);   =   {{title}}
  // document.getElementById('demo').innerHTML = title
  // {{title}}
}
