const mongoose = require("mongoose");
console.log(process.env.MONGODB_PASS);

mongoose.connect('mongodb+srv://rohitgawali45_db_user:${process.env.MONGODB_PASS} @ecomweb.511hybn.mongodb.net/?retryWrites=true&w=majority&appName=Ecomweb')

.then(()=>{
    console.log("Connected to DB");
    })
.catch((err)=>{
    console.log(err);
    console.log("Disconnected from DB");
    
});

