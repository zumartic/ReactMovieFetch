var axios = require('axios');

const OMDBAPI_URL = 'http://www.omdbapi.com/?t=';
const OMDBAPI_APIKEY = '&apikey=18436afd';


module.exports = {
    getMovie: function (title) {
        var encodedTitle = title.replace(" ", "+");
        var requestUrl = `${OMDBAPI_URL}${encodedTitle}${OMDBAPI_APIKEY}`

        return axios.get(requestUrl).then(function(res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data;
            }
        }, function(err){
            //throw new Error(res.data.message);
            throw new Error('Unable to fetch movie information')
        });
    }
}