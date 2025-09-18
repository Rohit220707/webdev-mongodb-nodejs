const express = require  ("express");
 require('dotenv').config();
 require ("./database/conn");
 const bodyParser = require("body-parser");

//model
const productModel = require("./model/product_model");
const offersSchema = require("./model/offers_model");
const offers_model = require("./model/offers_model");

const app = express();
const PORT = 5000 || process.env.PORT;

//global middleware
// app.use(()=>{
//     console.log("Hey called a route!");
// });

app.use(bodyParser.json());
var user = false;
// route middleware
const productMiddleware = (req,res,next)=>{
    console.log("Product middleware called");
    if(user){
        next();
    }else{
        res.status(410).json({message:"User not authenticated"});
    }
}
app.get("/", (req,res)=>{
    res.send("Hello from express server");
});


app.get("/product",productMiddleware,async (req,res)=>{
    try{
        const response = await productModel.find({});
        res.json(response);
    }catch(err){
       res.statusCode(401).json({error:err});
    }
     
});

app.get('/product',async (req,res)=>{
    // console.log("REQ",req.body);
    // console.log("Post your product");
    const data = req.body;
    const newProduct = new productModel(data);
    const response = await newProduct.save();
    console.log("Response:",response);
    res.send("Product created successfully");
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