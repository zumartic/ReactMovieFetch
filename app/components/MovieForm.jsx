var React = require('react');

var MovieForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var title = this.refs.title.value;

        if(title.length > 0){
            this.refs.title.value = '';
            this.props.onSearch(title);
        }
    },
    render: function (){
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

module.exports = MovieForm;