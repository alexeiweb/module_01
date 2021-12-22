'use strict'
{
const product = 'Шляпа';
const productCount = 3;
const productCategory = 'Одежда';
const productPrice = 1250;
}

{
const product = 'Часы';
const productCount = 5;
const productCategory = 'Аксесcуары';
const productPrice = 10299;
}

{
  const product = prompt('Наименование товара');
  const productCount = +prompt('Количество товара');  
  const productCategory = prompt('Категория товара');
  const productPrice = +prompt('Цена товара');

  if (!productCount) {    
    console.log('Количество товара:', 'Вы ввели некорректные данные!');
  }

  if (!productPrice) {    
    console.log('Цена товара:', 'Вы ввели некорректные данные!');
  }
}




