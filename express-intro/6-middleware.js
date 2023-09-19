const express = require("express");
const morgan = require("morgan");
const logger = require("./logger");
const authorize = require("./authorize");

const app = express();

app.use(morgan("tiny"));    // Morgan gir info om requests
app.use("/api", [logger, authorize]);    // Dette gjør at middleware blir brukt for alle paths som starter med api

app.get("/",(req,res) => {
    res.send("Hjem");
})
app.get("/about",(req,res) => {
    res.send("Om oss");
})
app.get("/api/products",(req,res) => {
    res.send("Produkter");
})
app.get("/api/items",(req,res) => {
    res.send("Gjenstander");
})

app.listen(5000,() => {
    console.log("Serveren lytter på port 5000...");
})