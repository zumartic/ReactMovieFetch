import { fail } from 'assert';

var axios = require('axios');
var OMDbAPI = require('OMDbAPI');

export var startMovieFetch = () => {
    return {
        type: 'START_MOVIE_FETCH'
    }
};

/*
export var getFavourites = () => {
    try {
        const json = localStorage.getItem('favourites');
        const favourites = JSON.parse(json);
        if(favourites) {
            this.setState(() => ({ favourites }));
        }
    } catch (e) {
        // Do nothig at all
    }

            favourites.map((item) => {   
                return {
                    type: 'GET_FAVOURITE',
                    action: item
                }
            }
};*/

export var successMovieFetch = (title, year, poster, plot, director, writer, actors) => {
    return {
        type: 'SUCCESS_MOVIE_FETCH',
        title,
        year,
        poster,
        plot,
        director,
        writer,
        actors
    }
};

export var errorMovieFetch = (error) => {
    return {
        type: 'ERROR_MOVIE_FETCH',
        error
    }
};

export var fetchMovie = (title) => {
    return (dispatch, getState) => {
        dispatch(startMovieFetch());

        OMDbAPI.getMovie(title).then(function (res){
            if(res.Response==="False"){
                dispatch(errorMovieFetch(res.Error));
            }else {
                dispatch(successMovieFetch(res.Title, res.Year, res.Poster, res.Plot, res.Director, res.Writer, res.Actors));
                dispatch(addToHistory(res.Title));
             };
        }, function(e){
            dispatch(errorMovieFetch(e.message));
        });

    };
;}

export var addToFavourites = (title) => {
    return {
        type: 'SET_FAVOURITE',
        title
    };
};

export var removeFavourite = (title) => {
    return {
        type: 'REMOVE_FAVOURITE',
        title
    };
};

export var addToHistory = (title) => {
    return {
        type: 'SET_HISTORY',
        title
    };
};
