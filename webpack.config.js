let path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: 'inline-sourcemap',
    entry: './app.ts',
    output: {
        path: path.join(__dirname, 'dev'),
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        loaders: [ // loaders will work with webpack 1 or 2; but will be renamed "rules" in future
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { 
                test: /\.tsx?$/,
                loader: 'ts-loader' 
            }
        ]
  }
}