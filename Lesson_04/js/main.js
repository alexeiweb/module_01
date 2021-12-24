'use strict'

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




