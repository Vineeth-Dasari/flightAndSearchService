const express = require("express");
//require('dotenv').config()  // this requires the dotenv variable we have setup
const { PORT } = require('./config/serverConfig');
const bodyparser = require("body-parser"); //Middleware


const setupAndStartServer = async () => {

    const app = express();
    
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended : true}));

    app.listen(PORT, () => {
        console.log(`Server started at port = ${PORT}`);
        //console.log(process.env); // Just for tracking our varibales in proces.env object.
    })



}


setupAndStartServer();
