var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        var title = this.refs.title.value;
        var encodedTitle = encodeURIComponent(title);
        if (title.length > 0 ) {
            this.refs.title.value = '';
            window.location.hash = '#/?title=' + encodedTitle;
        }
    },
    render: function(){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">Movie React App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Movie Info</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" placeholder="Search movie by title" ref="title"/>
                            </li>
                            <li>
                                <button type="submit" className="button">Get Movie</button>
                            </li>
                        </ul>
                    </form>
                </div>
        </div>
      );
    }
});

module.exports = Nav;
