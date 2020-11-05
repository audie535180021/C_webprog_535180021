const express = require('express');

var app = express();

// get route
app.get('/', (req,res)=>{

    res.send('Hello World Express');

}).listen(3000);

app.post('/', (req,res)=>{
    res.send('Ini Post Request!');
});

app.put('/user', (req, res)=>{
    res.send('PUT REQUEST DIJALANKAN!');
});

app.delete('/user', (req, res)=>{
    res.send('DELETE REQUEST PADA SUATU USER!');
});

app.use(express.static('public'));