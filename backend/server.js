/* eslint-disable */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose")
const port = process.env.port || 5000 

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))


const mongoURI = `mondodb://localhost:27017/4user`
mongoose.connect(mongoURI, { useNewUrlParser : true })
    .then(() => console.log("mongoDB connected"))
    .catch((err) => console.log(err))


const users = require("./routes/users")
app.use("/users", users)



app.listen(port, function() {
    console.log("server is running on port : " + port)
})
