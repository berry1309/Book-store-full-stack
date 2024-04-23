const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aryaki19:aryaki1912@cluster0.1cwplo7.mongodb.net/bookstore?retryWrites=true&w=majority"
)
.then(()=>console.log("Connected"));