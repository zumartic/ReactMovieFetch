export var searchReducer = (state = {isFetching: false, title: undefined}, action) => {
    switch (action.type) {
        case 'START_MOVIE_FETCH':
            return {
                isLoading: true,
                title: undefined
            }
        case 'COMPLETE_MOVIE_FETCH':
            return {
                isLoading: false,
                title: action.title
            }
        default:
            return state;
    }
}


export var favouriteReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FAVOURITE':
        return [
            ...state,
            {
                title: action.title
            }
        ]
        case 'REMOVE_FAVOURITE':
            return state.filter((movie) => movie.id !== action.id)
        default:
            return state;
    };
};