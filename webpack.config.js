var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./web/static/css/app.css", "./web/static/js/app.js"],
  output: {
    path: "./priv/static",       // Defines the base path
    filename: "js/app.js"
  },
  resolve: {
    modulesDirectories: [ "node_modules", __dirname + "/web/static/js" ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query: {
        presets: ["es2015"]
        }
    }, 
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style", "css")
    },
    // File loader.
    // Extracts the specified fonts and images into sepearate files and inserts the correct URL into the generated CSS.
    // For example url("../img/gfxSprite.png") in CSS becomes url(app/img/gfxSprite.da300248bf0a78b746782acb579f2e07.png)
    {
        test: /\.(jpg|png|gif|eot|woff2?|ttf|svg)$/,
        loader: 'file?name=[path][name].[hash].[ext]'
    }]
  },

  plugins: [
    new ExtractTextPlugin("css/app.css"),
    new CopyWebpackPlugin([{ from: "./web/static/assets" }])
  ]
};