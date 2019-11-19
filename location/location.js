const axios = require('axios')


const getLocationLatLon = async (dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { "x-rapidapi-key": "456391c428msh2762fd32dceb065p11d1eejsnc0a9d7d5ef3b" },
    })
    const response = await instance.get();

    if(response.data.Results.length === 0){
        throw new Error(`Not results for ${dir}`)
    }

    const data = response.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lng = data.lon

    return {
        direction,
        lat,
        lng
    }
}

module.exports = {
    getLocationLatLon
}