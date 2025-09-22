const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    address:String,
    hashedPassword:{type:String, required:true},
    profileImg:{type:String, default:"https://www.pngall.com/wp-content/uploads/5/Profile-PNG-High-Quality-Image.png"}
});

module.exports = mongoose.model("users", userSchema);