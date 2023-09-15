const {Router} = require("express")
const { getWeatherByName, getWeatherByForecast} = require("../handler/handlerWeather")

const mainRouter = Router()

//aca hay que crear las rutas a usar
mainRouter
        .get("/", getWeatherByName)
        .get("/forecast", getWeatherByForecast)

module.exports = mainRouter