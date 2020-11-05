const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const app = http.createServer();

app.on("request", (req, res)=>{
    res.writeHead(httpStatus.OK, {"Content-Type":"text/html"});
    let responseMessage = "<h1> This will show on the screen </h1>";
    res.end(responseMessage);
});

app.listen(Number(port));
console.log(`The server has started and is listening on port number : ${port}`);