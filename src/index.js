const express = require("express");
//require('dotenv').config()  // this requires the dotenv variable we have setup
const { PORT } = require('./config/serverConfig');
const bodyparser = require("body-parser"); //Middleware
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
const {City, Airports, Airplane} = require('./models/index');

//const cityRespository = require('./repository/city_repository');

const setupAndStartServer = async () => {

    const app = express();
    
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended : true}));

    app.use('/api',ApiRoutes);   //THis applies to all the incomming requests the initail one /api/***/**/*/*/

    app.listen(PORT, async () => {
        console.log(`Server started at port = ${PORT}`);

        if(process.env.SYNC_DB)
        {
            db.sequelize.sync({alter : true});   // Initially i have used the variable in env file and later i have removed this because i don't want to run some huge number of queries every time when ever i start my server.
                // this is a critical command use always alter if you use force all the existing data will lost.
                // should remove SYNC_DB in env, if you won't remove the syc happens all the time and if by mistakely add any wrong commad all the things will gone.
        }
        //console.log(process.env); // Just for tracking our varibales in proces.env object.
        
        //const repo = new cityRespository();
        //repo.createCity({name : "Hyderabad"});
        //repo.deelteCity(1);

        // const onecity = await City.findOne({
        //     where : {
        //         id : 9
        //     }
        // });
        // await Airplane.create({
        //     modelNumber : 'Bombardier CRJ'
        // })

        // const airports = await onecity.getAirports();
        // console.log(airports);

    })

}


setupAndStartServer();
