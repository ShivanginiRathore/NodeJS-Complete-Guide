const http = require('http');

const routes = require('./routes');

console.log(routes.someText);
console.log("random text");
const server = http.createServer(routes.handler);

server.listen(4001);