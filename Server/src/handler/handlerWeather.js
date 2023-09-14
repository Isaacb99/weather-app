const {getApiData} = require("../controller/controllerWheather.js")


const getWeatherByName = async (req, res) => {
    const {lat, long} = req.query
    try{
        const response = await getApiData(lat,long)
        // console.log(response)
        return res.status(200).json(response)

    }catch(error){
        return res.status(500).json(error.message)
    }
}

module.exports = {
    getWeatherByName
}