var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Movie = require('Movie');
var About = require('About');
var Favourites = require('Favourites');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New State', store.getState())
});

//store.dispatch(actions.addToFavourites('Testing'));
//store.dispatch(actions.addToFavourites('Uuno Turhapuro'));
//store.dispatch(actions.getFavourites);

//store.dispatch(actions.fetchMovie('uuno'));
//store.dispatch(actions.addToFavourites('Testing'));

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="about" component={About}/>
        <Route path="favourites" component={Favourites}/>
        <IndexRoute component={Movie}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);