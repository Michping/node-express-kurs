var http = require('http');
var fs = require('fs');

http
    .createServer(function (req,res) {
        const fileStream = fs.createReadStream("./content/storFil.txt","utf8");
        fileStream.on("open",() => {
            fileStream.pipe(res);
        })
        fileStream.on("error",(err) => {
            res.end(err);
        })
    })

// Dette programmet sender filer i chunks