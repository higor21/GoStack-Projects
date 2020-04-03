module.exports = {
    entry: './src/main.js', // main/root file
    output: { // output file
        path: __dirname + '/public', // __dirname: current location, similar to 'pwd' command line
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public',
    },
    module: { // modules
        rules: [ // rules to specify what'll happen with imported files into main files
            {
                test: /\.js$/, // translate only js files
                exclude: /node_modules/, // don't translate js files in the node_modules directory
                use: {
                    loader: 'babel-loader', // using babel-loader to translate the files
                }
            }
        ]
    }
}