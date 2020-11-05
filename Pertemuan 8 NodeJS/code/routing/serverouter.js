const port = 3000;
const http = require('http');
const httpStatusCode = require('http-status-codes');
const router = require('./router');
const fs = require('fs');

const plainTextContentType = {
    "Content-Type":"text/plain"
}

const htmlContentType = {
    "Content-Type":"text/html"
}

let customReadFile = (file, res)=>{
    fs.readFile(`./${file}`, (errors, data)=>{
        if(errors){
            console.log('Error reading the file');
        }
        res.end(data);
    });
}

router.get("/", (req,res)=>{
    res.writeHead(httpStatusCode.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req,res)=>{
    res.writeHead(httpStatusCode.OK, htmlContentType);
    customReadFile("views/index.html", res);
});

router.post("/", (req, res)=>{
    res.writeHead(httpStatusCode.OK, plainTextContentType);
    res.end("POSTED");
});

http.createServer(router.handle).listen(Number(port));
console.log(`The server has started and is listening on port number : ${port}`);