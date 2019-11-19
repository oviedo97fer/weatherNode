const argv = require('yargs').options({
    direction: {
        alias: 'd',
        desc: 'City Direction',
        demand: true
    }
}).argv;

const location = require('./location/location')
const weather = require('./weather/weather')


weather.getWeather(8.650000, -82.480003)
    .then(data => console.log(data))
    .catch(err => console.error(err))

const getInfo = async (direction) => {
    try {
        const locationData = await location.getLocationLatLon(direction);

        const weatherData = await weather.getWeather(locationData.lat, locationData.lng)
        return `${locationData.direction} weather is: ${weatherData}`

    } catch{
        return `No se pudo determinar`
    }
}

getInfo( argv.direction)
.then(console.log)
.catch(console.log)