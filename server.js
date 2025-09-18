const express = require  ("express");
 require('dotenv').config();
 require ("./database/conn");

//model
const productModel = require("./model/product_model");
const offersSchema = require("./model/offers_model");
const offers_model = require("./model/offers_model");

const app = express();
const PORT = 4000 || process.env.PORT;


app.get("/", (req,res)=>{
    res.send("Hello from express server");
});


app.get("/product",async (req,res)=>{
    try{
        const response = await productModel.find({});
        res.json(response);
    }catch(err){
       res.json({error:err});
    }
     
});

//get routes /offers : [{name,discount,expiry,terms,description}]

app.get("/offers",async(req,res)=>{
    
    try{
    const response = await offers_model.find({});
    res.json(response);
    }catch(err){
    res.json({error:err});
    }
});

app.listen(PORT, (err)=>{
    if(err) {
    console.log("server failed to start",err);
    return
    }
    console.log(`Server is running on port ${PORT} `);
 });

app.listen(PORT ,(err)=>{

});