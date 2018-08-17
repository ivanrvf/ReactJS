const http = require('http');
const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
 
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/utilData', function(req, res) {
  res.json('you did it');
   var fs = require('fs');
  var obj = JSON.parse((fs.readFileSync('utilData.json', 'utf8')).toString());
  console.log(obj);
  res.json(obj);
});