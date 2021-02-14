const helpers = require('./helpers');
const http = require('http');
const express = require('express');
const app = express();
const fs = require('fs');
const fileName = 'targetFile.txt';

/*
console.log("Test for nodejs");

const totalSum = helpers.sum(10, 200);
const totalSub = helpers.sub(200, 10);
console.log("TOTAL SUM: " + totalSum);
console.log("TOTAL SUB: " + totalSub);


const server = http.createServer ((req, res) => {
	res.end("hello world for server request");
})


server.listen(3000); 

app.get('/', (req, res) => {

	res.send("Test response"); 
});

app.listen(3000);



fs.readFile(fileName, (err, data) => {
	if(err) {
		console.log(err);
	}
	console.log(data.toString());
})

console.log('test async nodejs');

*/

const dataSync = fs.readFileSync(fileName);
console.log(dataSync.toString());

console.log('test sync nodejs');
