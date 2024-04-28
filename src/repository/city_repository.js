const { where } = require('sequelize');
const {City} = require ('../models/index');

class cityRespository {

    //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
    // For creating users and deleting users syntax we have gone throw above link for the reference.
    
    async createCity( {name} ){
        try{
            const city = await City.create({
                name
            });
            return city;
        } catch (error) {
            console.log("Error at repository layer");
            throw {error};
        }
    }

    async deleteCity( {cityId} ){   //cityid is actually is id but here we are mimiking
        try{
            await City.destroy( {
                where : {                       //similarly where clause we are using search in reference
                    id : cityId
                }  
            });
            return true;
        } catch (error) {
            console.log("Error at repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){
        try{
            const city = await City.update({data,
                where : { id : cityId}
            });
            return city;
        } catch (error) {
            console.log("Error at repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Error at repository layer");
            throw {error};
        }
    }

}

module.exports = cityRespository;
