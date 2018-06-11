const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV;

module.exports = {
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    context: resolve(__dirname, 'src'),

    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: env === 'production'
                    ? ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader?minimize']
                    })
                    : ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    env !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader?minimize',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: ['file-loader?hash=sha512&digest=hex&name=assets/images/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/fonts/'
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'root',
            meta: [
                // EXAMPLE:
                // {
                //     name: '',
                //     content: ''
                // }
            ],
            links: [
                {
                    href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
                    rel: "stylesheet", 
                    integrity: "sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp",
                    crossorigin: "anonymous"
                }
            ],
            mobile: true,
            lang: 'en-us',
            title: 'Carousel Demo'
        })
  ]
};

   