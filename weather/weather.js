const axios = require('axios');

const getWeather = async ( lat, lng) => {
    const apiKey = '846c59221e4e72e17608f1bec93996ef'
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`)

    return response.data.main.temp
}

module.exports = {
    getWeather
}