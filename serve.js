var http = require('http');
var fs   = require('fs');

http.createServer(function (request, response) {
    // response.writeHead(200, {
    //     'Content-Type': 'text/plain',
    //     'Access-Control-Allow-Origin' : '*'
    // });

    response.setHeader('Content-Type', 'text/html');
    fs.createReadStream('index.html').pipe(response);
  //  response.end('Hello World\n');
}).listen(1337);
