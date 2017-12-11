// import { historyReducer } from '../reducers/reducers';

var redux = require('redux');
var thunk = require('redux-thunk').default;
var {searchReducer, favouriteReducer, historyReducer } = require ('reducers');

export var configure = () => {
    var reducer = redux.combineReducers({
        searchMovie: searchReducer,
        handleFavourite: favouriteReducer,
        handleHistory: historyReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};