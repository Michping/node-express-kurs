const http = require('http');

const server = http.createServer();

server.on("request", (req, res) => {    // Vi skriver request fordi dette kjører når noen går på siden vår.
    res.end("Velkommen");
})

server.listen(5000);

// http bruker altså eventemitter for å gjøre events