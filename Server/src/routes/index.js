const {Router} = require("express")
const { getWeatherByLocation, getWeatherByForecast, getWeatherByName} = require("../handler/handlerWeather")

const mainRouter = Router()

//aca hay que crear las rutas a usar
mainRouter
        .get("/", getWeatherByLocation) //busca clima del lugar actual
        .get("/forecast", getWeatherByForecast) //busca clima de los proximos dias
        .get("/name", getWeatherByName) //busca clima por nombre del lugar

module.exports = mainRouter