module.exports = {
    mode:'development',
    module:{
        rules: [
        {
            test: /\.css$/, 
            use:["style-loader","css-loader"]
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            use:["file-loader"]
        },
        {
            test: /\.js$/,
            use:["babel-loader"]
        },
        
    ],
    },
}