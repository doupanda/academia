//requires 
const http = require("http")
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv').config();
const colors = require("colors");

//instances
const app = express();

//create server
const server = http.createServer(app)

//express config
app.use(morgan("tiny"));
app.use(express.json({limit: '2mb',  extended: true})); 
app.use(express.urlencoded({limit: '2mb', extended: true}));
app.use(cors());


//routes

app.use("/api", require("./routes/users.js"));
app.use("/api", require("./routes/courses.js"));

module.exports = app;

//listener
const port = process.env.API_PORT || 3001
server.listen(port, () => {
    console.log("API server listening on port " + port);
});


//Mongo Connection
const mongoUserName = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;
const mongoDatabase = process.env.MONGO_DATABASE;

var uri =
    "mongodb://" +
    mongoUserName +
    ":" +
    mongoPassword +
    "@" +
    mongoHost +
    ":" +
    mongoPort +
    "/" +
    mongoDatabase;

console.log(uri);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    authSource: "admin"
};

mongoose.connect(uri, options).then(
    () => {
        console.log("\n");
        console.log("*******************************".green);
        console.log("✔ Mongo Successfully Connected!".green);
        console.log("*******************************".green);
        console.log("\n");

    },
    err => {
        console.log("\n");
        console.log("*******************************".red);
        console.log("    Mongo Connection Failed    ".red);
        console.log("*******************************".red);
        console.log("\n");
        console.log(err);
    }
);

