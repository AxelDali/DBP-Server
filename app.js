const http = require('http');

// http => (request, response)

http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hola mundo a mi primer servidor web");
    response.end();
}).listen(4444);
