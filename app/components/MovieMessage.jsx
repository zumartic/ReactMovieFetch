var React = require('react');
var {connect} = require('react-redux');

var MovieMessage = (props) => {
    var {title,year, poster, plot, director, writer, actors} = props;
    return (
        <div>
            <h3 className="text-center">{title} ({year})</h3>
            <img className="poster" src={poster} alt="Poster" />
            <p>{plot}</p>
            <p><b>Director:</b> {director}</p>
            <p><b>Writer(s):</b> {writer}</p>
            <p><b>Actors:</b> {actors}</p>
        </div>
    );
}

module.exports = connect(
    (state) => {
        return {
            title: state.searchMovie.title,
            year: state.searchMovie.year, 
            poster: state.searchMovie.poster, 
            plot: state.searchMovie.plot, 
            director: state.searchMovie.director, 
            writer: state.searchMovie.writer, 
            actors: state.searchMovie.actors};
    }
)(MovieMessage);