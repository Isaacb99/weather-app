const {getApiData, getWeatherForecast} = require("../controller/controllerWheather.js")


const getWeatherByName = async (req, res) => {
    const {name} = req.query
    try{
        const response = await getApiData(name)
        console.log(response)
        return res.status(200).json(response)

    }catch(error){
        return res.status(500).json(error.message)
    }
}

const getWeatherByForecast = async(req, res)  =>{
    const {name} = req.body 
    const {days} = req.body

    try {
        if(days > 10) throw new Error("You can only see up to 10 days in advance")
        const response = await getWeatherForecast(name, days)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = {
    getWeatherByName,
    getWeatherByForecast
}