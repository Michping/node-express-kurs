const express = require("express");
const { product, people } = require("./data/data");

const app = express();

app.get("/",(req,res) => {
    res.json([
        {navn: "Michael"},
        {navn: "Bob"},
    ]);
})

app.get("/product",(req,res) => {
    res.json(product);
})

app.get("/people",(req,res) => {
    res.json(people);
})

app.listen(5000,() => {
    console.log("Serveren lytter på port 5000...");
})