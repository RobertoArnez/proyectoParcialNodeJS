const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema ({
    login : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        unique : true
    },
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
});

const usuarioModel = mongoose.model("usuario", usuarioSchema);
module.exports = usuarioModel;
