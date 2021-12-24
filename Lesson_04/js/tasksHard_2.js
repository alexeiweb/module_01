'use strict'

const money = +prompt('Введите Ваш доход');

if (money <= 15000) {
  console.log('Ваш налог:', money * 0.13);
} else if (money <= 50000) {
  console.log('Ваш налог:', (money - 15000) * 0.2 + 15000 * 0.13);
} else if (money > 50000) {
  console.log('Ваш налог:', (money - 50000) * 0.3 + 50000 * 0.2);
}