const { isPerfectNumber } = require('./soHoanHao');
const { daysInMonth } = require('./soNgayTrongThang');

console.log('Test isPerfectNumber:');
console.log('6 ->', isPerfectNumber(6)); 
console.log('9 ->', isPerfectNumber(9)); 

console.log('\nTest daysInMonth:');
console.log('01/2020 ->', daysInMonth('01/2020')); 
console.log('02/2020 ->', daysInMonth('02/2020')); 
console.log('02/2019 ->', daysInMonth('02/2019')); 
console.log('13/2020 ->', daysInMonth('13/2020')); 
