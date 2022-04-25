const express  = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
require("dotenv").config();

const connect = require("./configs/db");
app.use(express.json());
app.use(cors());

// importing the controllers.
const { register,login } = require("./controllers/authentication.controller");
const entityController = require("./controllers/entity.controller");
const petController = require("./controllers/pet.controller");
const bookingController = require("./controllers/booking.controller");


app.use("/register",register);
app.use("/login",login);
app.use("/entity",entityController);
app.use("/pet",petController);
app.use("/booking",bookingController);




app.listen(process.env.PORT || port,async ()=>{
    try{
        await connect()
        console.log("Listening on Port "+port)
    }
    catch(err){
        console.log(err.message)
    }
})