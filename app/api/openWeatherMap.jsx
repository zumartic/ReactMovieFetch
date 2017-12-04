var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9f5b382a9edd663ef5c3c625c98b6912&units=metric';
const OMDBAPI_URL = 'http://www.omdbapi.com/?t=';
const OMDBAPI_APIKEY = '&apikey=18436afd';

// 9f5b382a9edd663ef5c3c625c98b6912

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

        return axios.get(requestUrl).then(function(res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function(err){
            //throw new Error(res.data.message);
            throw new Error('Unable to fetch weather for that location')
        });
    }
}