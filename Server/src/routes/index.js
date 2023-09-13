const {Router} = require("express")
const { getWeatherByName } = require("../handler/handlerWeather")

const mainRouter = Router()

//aca hay que crear las rutas a usar
mainRouter.get("", getWeatherByName)

module.exports = mainRouter