'use strict'

const money = +prompt('Введите Ваш доход');
const tax;

if (money <= 15000) {
  console.log('Ваш налог:', tax = money * 0.13);
}

if (money <= 50000) {
  console.log('Ваш налог:', money * 0.2);
}

if (money > 50000) {
  console.log('Ваш налог:', money * 0.3);
}

// switch (money) {
//   case (money <= 15000):
//     console.log('Вы получите:', money - money * 0.13)
//     break;
  
//     case money <= 50000:
//       console.log(money - money / 0.2)
//       break;

//   default:
//     break;
