'use strict'

const money = +prompt('Введите Ваш доход');

if (money <= 15000) {
  console.log('Ваш налог:', money * 0.13);
} else if (money <= 50000) {
  console.log('Ваш налог:', money * 0.2);
} else if (money > 50000) {
  console.log('Ваш налог:', money * 0.3);
}