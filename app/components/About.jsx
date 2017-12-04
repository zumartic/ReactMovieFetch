var React = require('react');

var About = (props) => {
    return (
            <div>
                <h1 className="text-center page-title">About</h1>
                <p>This is a movie fetch application build on React. </p>
                <p>Some tools that I have used</p>
                <ul>
                    <li>
                        <a href="https://facebook.github.io/react">React</a> - Used JavaScrip framework.
                    </li>
                    <li>
                        <a href="http://www.omdbapi.com/">OMDb API</a> - The OMDb API is a RESTful web service to obtain movie information.
                    </li>
                </ul>
            </div>
        );
}

module.exports = About;