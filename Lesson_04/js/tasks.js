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

  const result = (((math + russian + IT) >= 265) ? 'Поздравляю, Вы поступили на бюджет!' : 'Попробуйте в следующем году');
  console.log(result);
}

{
  const money = +prompt('Укажите сумму, которую Вы хотите снять?');

  const result = ((Number.isInteger(money / 100)) ? 'Вы можете снять указанную сумму' : 'Вы не можете снять указанную сумму');
  console.log(result);
}

