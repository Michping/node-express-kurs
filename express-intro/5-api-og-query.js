const express = require("express");
const { product, people } = require("./data/data");

const app = express();

app.get("/",(req,res) => {
    res.send("<h1>Hjemmeside</h1><a href='/api/products'>produkter</a>");
})

app.get("/api/products",(req,res) => {
    const newProduct = product.map((p) => {     // Denne koden gjør at vi bare tar med id og navn siden vi ikke trenger beskrivelse
        const {id,name} = p;
        return {id,name};
    })
    res.json(newProduct);
})

app.get("/api/products/:productID",(req,res) => {   // når vi skriver : i pathen, så henter den hva enn som står der som en string
    const {productID} = req.params;     // Dette er hvordan man deklarerer det som er i url pathen til en variabel
    
    const singleProduct = product.find((p) => p.id == Number(productID));     // Dette finner info om selve produktet
    // Koden under fikser det som skjer om man skriver en ugyldig id
    if(!singleProduct) {
        return res.status(404).send(`finner ikke produkt med id ${productID}`)
    }

    return res.json(singleProduct);
})

app.get("/api/v1/query",(req,res) => {      // Dette fikser så man kan skrive f.eks ?search=banan bak pathen for å søke etter produkt
    const {search,limit} = req.query
    let sortedProduct = [...product];

    if(search) {
        sortedProduct = sortedProduct.filter((p) => {
            return p.name.startsWith(search);
        })
    }
    if(limit) {
        sortedProduct = sortedProduct.slice(0,Number(limit))
    }
    if(sortedProduct.length < 1) {
        return res.status(200).send("Ingen produkter matcher ditt søk");
    }
    res.status(200).json(sortedProduct);

    res.send("Hello world")
})

app.listen(5000,() => {
    console.log("Serveren lytter på port 5000...");
})