import { Mobile } from './../model/mobile-schema';

export const MOBILES: Mobile[] = [
  {
    id: 1001,
    name: 'Samsung',
    inStock: 0,
    price: 2200,
    country: 'Australia',
    textColor: 'red',
    isSold: false,
  },
  {
    id: 1002,
    name: 'Moto',
    inStock: 30,
    price: 30000,
    country: 'Australia',
    textColor: 'green',
    isSold: false,
  },
  {
    id: 1003,
    name: 'Sony',
    inStock: 60,
    price: 12000,
    country: 'Australia',
    textColor: 'blue',
    isSold: true,
  },
];
