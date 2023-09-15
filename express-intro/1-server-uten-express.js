const http = require('http');
const {readFileSync} = require("fs");

// Hent fil:
const homePage = readFileSync("./html/index.html");

const server = http.createServer((req,res) => {
    if(req.url == "/") {
        res.writeHead(200,{"content-type":"text/html"});     // 200 er statuskoden, og det andre viser at det er html
        res.write(homePage)
        res.end();  // Man må alltid skrive end for å vise at responsen er klar
    } else if(req.url == "/contact") {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>Michaels nettside</h1>")
        res.end("<h2>Kontakt oss</h2>");
    } else {
        res.writeHead(404,{"content-type":"text/html"});
        res.write("<h1>Michaels nettside</h1>")
        res.end("<h2>Error 404, fant ikke siden!</h2>");
    }
});



server.listen(5000);