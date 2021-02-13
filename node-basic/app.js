const helpers = require('./helpers');

console.log("Test for nodejs");

const totalSum = helpers.sum(10, 200);
const totalSub = helpers.sub(200, 10);
console.log("TOTAL SUM: " + totalSum);
console.log("TOTAL SUB: " + totalSub);

