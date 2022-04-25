const mongoose = require("mongoose");
// require("dotenv").config()
const connection_string = "mongodb+srv://root:root@cluster0.8iob7.mongodb.net/pet_app";

const connect = ()=>{
    return mongoose.connect(
        connection_string
    )
}

module.exports = connect;