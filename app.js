const http = require('http');
const fs = require('fs');

// http => (request, response)
//const data = fs.readFileSync('./WWW/file.txt')

http.createServer((request, response)=>{
    const file = './WWW/file.txt';
    fs.readFile(file, (err, data)=>{
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(data);
        response.end();
    });
}).listen(4444);
