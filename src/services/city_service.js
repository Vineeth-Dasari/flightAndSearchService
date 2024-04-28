const { cityRespository } =  require('../repository/index');    // here this service can be called from index.js because this can be easy and helpful for us to take all the repository values from a single file.


class cityService{
    constructor(){
        this.cityRespository = new cityRespository();
    }

    async createCity(data) {
        try{
            const city = await this.cityRespository.createCity(data);
            return city;
        }catch(error){
            console.log("Error at service layer");
            throw{error};
        }
    }

    async deleteCity(id) {
        try{
            const response = await this.cityRespository.deleteCity(id);
            return response;
        }catch(error){
            console.log("Error at service layer");
            throw{error};
        }
    }

    async updateCity({cityId,data}) {
        try{
            const city = await this.cityRespository.updateCity({cityId,data});
            return city;
        }catch(error){
            console.log("Error at service layer");
            throw{error};
        }
    }

    async getCity(cityId) {
        try{
            const city = await this.cityRespository.getCity(cityId);
            return city;
        }catch(error){
            console.log("Error at service layer");
            throw{error};
        }
    }
}

