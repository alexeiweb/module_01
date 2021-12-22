'use strict'
{
const rain = Math.round(Math.random());
console.log(rain);

if (rain === 0) {
  console.log('Дождя нет!');  
} else {
  console.log('Пошёл дождь. Возьмите зонт!');
}
}

{
  const math = +prompt('Введите кол-во баллов по математике:');
  const russian = +prompt('Введите кол-во баллов по русскому языку:');  
  const IT = +prompt('Введите кол-во баллов по информатике:');

  if ((math + russian + IT) >= 265) {
    alert('Поздравляю, Вы поступили на бюджет!');    
  } else {
    alert('Попробуйте в следующем году');
  }
  
}

