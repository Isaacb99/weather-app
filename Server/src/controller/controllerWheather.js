const axios = require("axios")
require("dotenv").config();

const { API_KEY } = process.env;

const getApiData = async(lat, long) =>{

    const response = (await axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${long}`)).data

    if(!response) throw new Error("Country or State not found!")
    return response
}

module.exports = {
    getApiData    
}