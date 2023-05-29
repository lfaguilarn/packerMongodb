const http = require('http');
const dbConnect = require('./config/mongo')

const hostname = 'localhost';
const port = 3000;

dbConnect();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('NodeJS - Luis Aguilar - Ecuador!\n');
  console.log(connected)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

