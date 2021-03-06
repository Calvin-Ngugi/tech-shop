import express from "express";
import products from "./data/Products.js";
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDB.js";

dotenv.config();
connectDatabase();
const app = express();

//LOAD PRODUCTS FROM SERVER
app.get("/api/products", (req, res) => {
    res.json(products);
});

//SINGLE PRODUCT FROM SERVER
app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`server run in port ${PORT}`));