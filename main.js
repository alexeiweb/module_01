'use strict'
{
const product = 'Шляпа';
const productCount = 3;
const productCategory = 'Одежда';
const productPrice = 1250;

console.log('product: ', product);

console.log(productCount * productPrice);

console.log(`На складе ${productCount} единиц(ы) товара ${product} на сумму ${productCount * productPrice} рублей`);
}

{
const product = 'Часы';
const productCount = 5;
const productCategory = 'Акссесуары';
const productPrice = 10299;

//console.log('product: ',product);
//console.log(productCount * productPrice);
}

{
  const product = prompt('Наименование товара');
  const productCount = Number(prompt('Количество товара'));  
  const productCategory = prompt('Категория товара');
  const productPrice = +prompt('Цена товара');
  
  console.log('Наименование товара: ', product);
  console.log('Количество товара: ', productCount);
  console.log('Категория товара: ', productCategory);
  console.log('Цена товара: ', productPrice);
  
  console.log(typeof product);
  console.log(typeof productCount);
  console.log(typeof productCategory);
  console.log(typeof productPrice);  
}




