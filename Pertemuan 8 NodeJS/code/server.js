const port = 3000;
const http = require('http');
const httpstatus = require('http-status-codes');

let app = http.createServer((req, res)=>{
    console.log("Received an incoming request!");
    res.writeHead(httpstatus.OK, {"Content-Type":"text/html"});

    let responseMessage = "<h1> Hello, Universe! </h1>";
    res.write(responseMessage);
    res.end();
    console.log(`Sent a response : ${responseMessage}`);
}).listen(Number(port));

console.log(`The server has started and is listening on port number : ${port}`);