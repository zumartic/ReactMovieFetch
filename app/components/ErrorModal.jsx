var React = require('react');
var ReactDom = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var {connect} = require('react-redux');

var ErrorModal = (props) => {
    var {message} = props;
    console.log(message);
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>Error</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDom.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    
        return (
            <div>
            </div>
        )
    };

module.exports = connect((state) => {
    console.log(connect);
    console.log(state.searchMovie.errorMessage);
    return {
        message: state.searchMovie.errorMessage};
})(ErrorModal);

/*
var ErrorModal = React.createClass({
    getDefaultProps: function(){
        return{
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var {title, message} = this.props;
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDom.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function () {

        return (
            <div>
            </div>
        );


    }
});*/

// module.exports = ErrorModal;

