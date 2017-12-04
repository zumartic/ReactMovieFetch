var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Movie: 'app/components/Movie.jsx',
            About: 'app/components/About.jsx',
            Favourites: 'app/components/Favourites',
            MovieForm: 'app/components/MovieForm.jsx',
            MovieMessage: 'app/components/MovieMessage',
            openWeatherMap: 'app/api/openWeatherMap.jsx',
            OMDbAPI: 'app/api/OMDbAPI.jsx',
            ErrorModal: 'app/components/ErrorModal.jsx',
            applicationStyles: 'app/styles/app.scss',
            actions: 'app/actions/actions',
            reducers: 'app/reducers/reducers.jsx'
        },
        extensions: ['', '.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
