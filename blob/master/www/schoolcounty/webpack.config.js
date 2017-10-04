var rucksack = require('rucksack-css')
var webpack = require('webpack')
var path = require('path')

module.exports = {
    context: path.join(__dirname, './client'),
    entry: {
        jsx: './index.js',
        html: './index.html',
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'react-router-redux',
            'redux'
        ]
    },
    output: {
        path: path.join(__dirname, './static'),
        filename: 'bundle.js',
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: "html-loader?removeRedundantAttributes=false"
            },
            /*{
                test: /client.*\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['react-html-attrs', "transform-object-assign"],
                }
            },*/
            {
                test: /\.css$/,
                include: /client/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
                    'postcss-loader',
                ]
            },
            {
                test: /\.css$/,
                exclude: /client/,
                loader: 'style!css'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel-loader?presets[]=es2015,presets[]=react,plugins[]=react-html-attrs,plugins[]=transform-object-assign'],
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    postcss: [
        rucksack({
            autoprefixer: true
        })
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        })
    ],
    devServer: {
        contentBase: './client',
        hot: true
    }
}
