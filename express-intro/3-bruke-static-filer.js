const express = require("express");
const path = require("path");

const app = express();

// Static er basically en fil som serveren ikke trenger å endre
app.use(express.static("./public"))     // Dette er for å vise hvilken mappe du har static filer (html, css, js osv...)

app.get("/",(req,res) => {
    res.sendFile(path.resolve(__dirname, "./html/index.html"));     // Dette fikser så man kan bruke f.eks html som 
});

app.all("*",(req,res) => {
    res.status(404).send("Fant ikke ressurs");
})

app.listen(5000,() => {
    console.log("serveren lytter på port 5000...");
});