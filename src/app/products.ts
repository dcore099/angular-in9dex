export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  discount: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    discount: 5
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    discount: 15
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Some shitty phone',
    discount: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/