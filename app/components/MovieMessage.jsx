var React = require('react');

var MovieMessage = ({title,year, poster, plot, director, writer, actors}) => {
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

module.exports = MovieMessage;