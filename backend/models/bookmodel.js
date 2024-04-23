const mongoose = require("mongoose");
//creation of schema which basically includes what do we want in our database

const bookSchema = new mongoose.Schema({
    bookname:{type:String, required:true },
    description:{type:String, required:true },
    author:{type:String, required:true },
    image:{type:String, required:true },
    price:{type:Number, required:true }
    
});

module.exports = new mongoose.model("books", bookSchema);

