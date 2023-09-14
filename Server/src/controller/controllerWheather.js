const axios = require("axios")
require("dotenv").config();

const { API_KEY } = process.env;

const getApiData = async(name) =>{

    const response = (await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${name}`)).data

    if(!response) throw new Error("Country or State not found!")
    return response
}

const getWeatherForecast = async(name, days) =>{
    const response = (await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${name}&days=${days}&aqi=no&alerts=no`)).data

    if(!response) throw new Error("Country or State not found!")
    return response
}

module.exports = {
    getApiData,
    getWeatherForecast   
}