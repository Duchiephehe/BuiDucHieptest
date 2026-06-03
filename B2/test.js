const { isPerfect } = require('./soHoanHao');

const tests = [6, 9, 28, 1, 496, 8128];

tests.forEach(n => {
    console.log(`${n} -> ${isPerfect(n) ? 'True' : 'False'}`);
});
