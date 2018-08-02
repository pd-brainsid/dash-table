const path = require('path');
const packagejson = require('./package.json');

const dashLibraryName = packagejson.name.replace(/-/g, '_');

module.exports = {
    entry: {
        bundle: './src/dash-table/index.js',
        demo: './demo/index.js',
    },
    output: {
        path: path.resolve(__dirname, dashLibraryName),
        filename: '[name].js',
        library: dashLibraryName,
        libraryTarget: 'window',
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'plotly.js': 'Plotly',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            'dash-table': path.resolve('./src/dash-table'),
            'core': path.resolve('./src/core'),
            'tests': path.resolve('./tests')
        },
        extensions: ['.js', '.ts']
    }
};
