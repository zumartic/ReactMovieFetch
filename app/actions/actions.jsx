export var startMovieFetch = () => {
    return {
        type: 'START_MOVIE_FETCH'
    }
}

export var completeMovieFetch = (title) => {
    return {
        type: 'COMPLETE_MOVIE_FETCH',
        title
    }
}

export var fetchMovie = () => {
    return (dispatch, getState) => {
        dispatch(startMovieFetch());

        axios.get('http://ipinfo.io').then(function (res) {
            var loc = res.data.loc;
            var baseUrl = 'http://maps.google.com?q='
            dispatch(completeMovieFetch(baseUrl + loc));
        });
    };
}

export var addToFavourites = (movieTitle) => {
    return {
        type: 'SET_FAVOURITE',
        movieTitle
    };
};
export var removeFavourite = (movieTitle) => {
    return {
        type: 'REMOVE_FAVOURITE',
        movieTitle
    };
};