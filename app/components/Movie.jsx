var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');

var MovieForm = require('MovieForm');
var MovieMessage = require('MovieMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');
var OMDbAPI = require('OMDbAPI');
var actions = require('actions');

const Movie = (props) => {
 /*   getInitialState: function (){
        return {
            isLoading: false,
            title: undefined,
            year: undefined,
            poster: undefined,
            plot: undefined,
            director: undefined,
            writer: undefined,
            actors: undefined,
            searchHistory: [],
            favourites: []
        }
    },
    handleSearch: function (title) {
        var that = this;
        this.setState({
            isLoading:true,
            errorMessage: undefined,
            title: undefined
        });
        OMDbAPI.getMovie(title).then(function (res){
            if(res.Response==="False"){
                that.setState({
                    isLoading: false,
                    errorMessage: res.Error
                });
            }else {
                var searchHistory = that.state.searchHistory;
                searchHistory.unshift(res.Title);
                that.setState({
                    title: res.Title,
                    year: res.Year,   
                    poster: res.Poster,
                    plot: res.Plot,
                    director: res.Director,
                    writer: res.Writer,
                    actors: res.Actors,
                    isLoading: false, 
                    searchHistory: searchHistory
                })
             };
        }, function(e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    /*componentDidMount: function (){
        var title = this.props.location.query.title;
        
        if (title && title.length > 0) {
            this.handleSearch(title);
            window.location.hash = '#/';
        }

        try {
            const json = localStorage.getItem('favourites');
            const favourites = JSON.parse(json);
            
            if(favourites) {
                this.setState(() => ({ favourites }));
            }
        } catch (e) {
            // Do nothig at all
        }
    },
    componentWillReceiveProps: function (newProps) {
        var title = newProps.location.query.title;
                
        if (title && title.length > 0) {
            this.handleSearch(title);
            window.location.hash = '#/';
        }
    },
    onSearch: function(e){
        console.log("TEWEWRERW");
        e.preventDefault();
        var location = this.refs.title.value;
        var encodedLocation = encodeURIComponent(location);
        if (location.length > 0 ) {
            this.refs.location.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    handleAddFavourite: function () {
        if (this.state.favourites.indexOf(this.state.title) < 0) {
            var newFavourite = this.state.favourites;
            newFavourite.unshift(this.state.title);
            this.setState(() => ({favourites: newFavourite}))
            const json = JSON.stringify(this.state.favourites);
            localStorage.setItem('favourites', json);
        } 
    },
    handleRemoveFavourite: function (e) {
        e.preventDefault();
        var newFavourites = this.state.favourites;
        var index = this.state.favourites.indexOf(e.target.value);
         if (index > -1) {
            newFavourites.splice(index,1);            
            this.setState(() => ({favourites: newFavourites}))
            const json = JSON.stringify(this.state.favourites);
            localStorage.setItem('favourites', json);
        } 

    },*/
    
        var {dispatch} = props;
        var {isLoading, title, year, poster, plot, director, writer, actors, errorMessage} = props.state.searchMovie;
        var favourites = props.state.handleFavourite;
        var searchHistory = props.state.handleHistory;
        
        function componentWillReceiveProps () {
            console.log("props");
        };

        function handleAddFavourite  (e) {
            e.preventDefault();
            dispatch(actions.addToFavourites(title));
        }

        function handleRemoveFavourite  (e) {
            e.preventDefault();
            dispatch(actions.removeFavourite(title));
        }

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching movie...</h3>;
            }else if(title){
                return (
                <div>
                    <div className="movie-message"><MovieMessage />
                    </div>
                    <div className="button-container">
                      {renderButton()}
                    </div>
                </div>
                );
            }
        }
        function renderButton() {
            return (
                <div>
                    <button type="button" onClick={handleAddFavourite} className="search-history hollow button expanded">
                        Add to favourites
                    </button>
            </div>
            )
        }

        function renderError(){
            if (typeof errorMessage === 'string'){
                return (
                    <div className="text-center">
                        <h3 >Error</h3>
                        <p>{errorMessage}</p>
                    </div>
                )
            }
        }

        function renderHistory() {
            if(searchHistory.length>0){
                return (
                    <div className="text-center search-history">
                        <h4>Search History</h4>
                        {searchHistory.map((item, index)=>{
                            var tempTitle = `/?title=${item}`;
                            return <p key={index}><Link to={tempTitle}>{item}</Link></p>
                        })}
                    </div>
                )
            }
        }

        function renderFavourites() {
            //var favourites = that.state.handleFavourite;
            if(favourites.length>0){
                return (
                    <div className="text-center search-history">
                        <h4>Favourites</h4>
                        {favourites.map((item, index)=>{
                            var tempTitle = `/?title=${item}`;
                            return <p key={index} className="fav-container">
                                <Link to={tempTitle}>{item}</Link>
                                <button type="submit" value={item} onClick={handleRemoveFavourite} className="hollow button alert button--remove">
                                    remove
                                </button>
                                </p>
                        })}
                    </div>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Movie Info</h1>
                <MovieForm />
                {renderMessage()}
                {renderError()}
                {renderFavourites()}
                {renderHistory()}
            </div>
        );
    
};

module.exports = connect(
    (state) => {
        return {
            state
        };
    }
)(Movie);
