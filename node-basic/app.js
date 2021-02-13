const helpers = require('./helpers');
const http = require('http');

console.log("Test for nodejs");

const totalSum = helpers.sum(10, 200);
const totalSub = helpers.sub(200, 10);
console.log("TOTAL SUM: " + totalSum);
console.log("TOTAL SUB: " + totalSub);


const server = http.createServer ((req, res) => {
	res.end("hello world for server request");
})

server.listen(3000); 