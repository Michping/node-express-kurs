const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url == '/') {
        res.end('Welcome to our home page');
    }
    if (req.url == '/about') {
        res.end('Dette er about siden');
    }
    res.end(`
        <h1> Fant ikke siden :( </h1>
        <a href="/"> Gå til hjem </a>
    `)
})

server.listen(5000);