var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var MovieForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var title = this.refs.title.value;

        if(title.length > 0){
            this.refs.title.value = '';
            dispatch(actions.fetchMovie(title));
        }
    },
    render: function (){
        var {dispatch} = this.props;
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="search" ref="title" placeholder="Search Movie by title" />
                </div>
                <div>
                    <button className="hollow button expanded">Get Movie Information</button>
                </div>
            </form> 
        );
    }
});

module.exports = connect()(MovieForm);