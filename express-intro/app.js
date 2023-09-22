const express = require("express");
let { people } = require("./data/data");

const app = express();

app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));  // dette gjør så vi kan hente form data

app.get("/api/people",(req,res) => {
    res.status(200).json({success:true,data:people});
})

app.post("/login",(req,res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Velkommen ${name}`);
    }
    res.status(401).send("Vennligst gi legitimasjon");
})

app.listen(5000, () => {
    console.log("Server lytter på port 5000");
})