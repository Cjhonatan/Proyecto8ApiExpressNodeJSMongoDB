const mongoose = require("mongoose");
const Uri = "mongodb+srv://dbmain:PPESPVojqNIKuC0P@cluster0.cazg2rm.mongodb.net/UserDb?retryWrites=true&w=majority";

mongoose.connect(Uri,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> console.log("Conexion con BD"))
.catch(err => console.log("Error conexion BD", err));


const userSchema = new mongoose.Schema({
    username:{type:String, require: true},
    email:{type:String, require: true},
    password:{type:String, require: true}
});

// mongoose.connect("mongodb://127.0.0.1:27017/usuarios",{useNewUrlParser:true, useUnifiedTopology:true})
// .then(()=> console.log("Conexion con BD"))
// .catch(err => console.log("Error conexion BD", err));

module.exports = mongoose.model('User', userSchema)


