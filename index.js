const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end("Hello World! Howdy Everyone!!!");
}).listen(process.env.PORT);
