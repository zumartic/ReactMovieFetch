export var searchReducer = (state = {isLoading: false, title: undefined, errorMessage: undefined}, action) => {
    switch (action.type) {
        case 'START_MOVIE_FETCH':
            return {
                isLoading: true,
                title: undefined
            }
        case 'SUCCESS_MOVIE_FETCH':
            return {
                title: action.title,
                year: action.year,
                poster: action.poster,
                plot: action.plot,
                director: action.director,
                writer: action.writer,
                actors: action.actors,
                isLoading: false
            }
        case 'ERROR_MOVIE_FETCH':
            console.log("ERROR");
            console.log(action.error);
            return {
                isLoading: false,
                errorMessage: action.error
            }
        default:
            return state;
    }
}

export var favouriteReducer = (state = [], action) => {
    switch (action.type) {
       /* case 'GET_FAVOURITE':
            return [...state, action.title]*/
        case 'SET_FAVOURITE':
            if(state.indexOf(action.title) < 0){
               // const json = JSON.stringify([...state, action.title]);
               // localStorage.setItem('favourites', json);
                return [...state, action.title]
                }
            else 
                return state;
        case 'REMOVE_FAVOURITE':
            const nextState = state.filter((movie) => movie !== action.title);
            console.log(action.title);
            console.log(nextState);
            /*const json = JSON.stringify(nextState);
            localStorage.setItem('favourites', json);*/
            return state.filter((movie) => movie !== action.title)
        default:
            return state;
    };
}

export var historyReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HISTORY':
        return [
               action.title
        , ...state]
        default:
            return state;
    };
}
