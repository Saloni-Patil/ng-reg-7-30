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
      name: 'Mobile',
    },
    {
      id: 1002,
      name: 'Laptop',
    },
    {
      id: 1003,
      name: 'Book',
    },
  ];

  // document.write(title);
  // document.getElementById('demo').innerHTML = title
  // {{title}}
}
