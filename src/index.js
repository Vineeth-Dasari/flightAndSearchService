const express = require("express");
//require('dotenv').config()  // this requires the dotenv variable we have setup
const { PORT } = require('./config/serverConfig');
const bodyparser = require("body-parser"); //Middleware
const ApiRoutes = require('./routes/index');

//const cityRespository = require('./repository/city_repository');

const setupAndStartServer = async () => {

    const app = express();
    
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended : true}));

    app.use('/api',ApiRoutes);   //THis applies to all the incomming requests the initail one /api/***/**/*/*/

    app.listen(PORT, () => {
        console.log(`Server started at port = ${PORT}`);
        //console.log(process.env); // Just for tracking our varibales in proces.env object.
        
        //const repo = new cityRespository();
        //repo.createCity({name : "Hyderabad"});
        //repo.deelteCity(1);
    })

}


setupAndStartServer();
