const express = require("express");

const app = express();

app.get("/",(req,res) => {
    console.log("Bruker gikk på hjemmesiden");
    res.status(200).send("Hjemmeside");     // 200 betyr request var successful
})

app.get("/about",(req,res) => {
    res.status(200).send("Om oss");
})

app.all("*",(req,res) => {
    res.status(404).send("<h1>Fant ikke ressurs</h1>");     // Dette skriver "fant ikke ressurs" når det er 404 error
})

app.listen(5000,() => {
    console.log(`Server listening on port 5000...`);
})


// Forskjellige app metoder:
// app.get
// app.post
// app.put
// app.delete
// app.all - håndterer alle http metoder
// app.use
// app.listen