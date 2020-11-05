const port = 3000;
const http = require('http');
const httpStatus = require('http-status-codes');
const fs = require('fs');

const getViewUrl = (url) => {
    return `views/${url}.html`;
}

http.createServer((req, res) => {
    let ViewUrl = getViewUrl(req.url);
    fs.readFile(ViewUrl, (error, data) => {
        if (error) {
            res.writeHead(httpStatus.NOT_FOUND);
            res.write("<h1>FILE NOT FOUND</h1>");
        } else {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/html"
            });
            res.write(data);
        }
        res.end();
    });
}).listen(Number(port));

console.log(`The server has started and is listening on port number : ${port}`);