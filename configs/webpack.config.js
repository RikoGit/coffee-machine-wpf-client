const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { join } = require('path');

const isDev = process.env.NODE_ENV === 'development';

const rootDir = join(__dirname, '..');
const staticDir = join(rootDir, '.');

module.exports = {
    //entry: ['@babel/polyfill', './index.js'],
    entry: './index.js',
    mode: isDev ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            // это будет применяться к файлам `.js`
            // А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    //'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            //modules: true,
                        },
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|otf|woff|woff2)$/i,
                loader: 'url-loader',
                options: {
                    limit: 9192,
                },
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    output: {
        filename: 'index.js',
        path: join(staticDir, 'docs'),
        publicPath: '',
    },
};
