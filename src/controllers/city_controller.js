const cityService = require("../services/index");

/*
 data -> req.body
 Inoder to use cityService we need to create cityService object
*/

const cityService = new cityService(); 


const create = async (res, req) => {
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success : true,
            message : "Successfully created a city",
            err : {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to create a city",
            err : error
        })
    }
}

// ../city/:id
const destroy =async (res, req) => {
    try{
        const city = await cityService.createCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully deleted a city",
            err : {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to delete a city",
            err : error
        })
    }
}


//  ../city/:id
const get =async (res, req) => {
    try{
        const city = await cityService.createCity(req.params.id);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully fletch a city",
            err : {}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to fletch a city",
            err : error
        })
    }
}


// ../city/:id  ->carries req.body     patch request
const update =async (res, req) => {
    try{
        const city = await cityService.createCity(req.params.id, req.body);
        return res.status(200).json({
            data : city,
            success : true,
            message : "Successfully updated a city",
            err : {}
        })

    }catch(error){
        console.log(error);
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able to update a city",
            err : error
        })
    }
}