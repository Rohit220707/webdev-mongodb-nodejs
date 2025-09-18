const  mongoose  = require("mongoose");

const offersSchema = new mongoose.Schema({
    name:String,
    discount:String,
    terms:String,
    expiry:String,
    description:String,
    bg_img:String,
});

 module.exports = mongoose.model("Offers", offersSchema);