const { createReadStream } = require("fs");

const stream = createReadStream("./content/storFil.txt", {
    highWaterMark: 90000,
    encoding: "utf8"
});

// Default buffer er 64kb
// Siste buffer er remainder
// highWaterMark - størrelse per buffer

stream.on("data",(result) => {
    console.log(result);
})

stream.on("error",(err) => {
    console.log(err);
})