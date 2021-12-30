'use strict'

const cash = prompt('Введите сумму:');
const dollar = 1.2;
const rouble = 73;

const doSomething = (money) => {

 const convertCash = cash * dollar * rouble;
  return convertCash;
};

console.log(doSomething());





