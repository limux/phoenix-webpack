# Webpack Integration for Phoenix Framework 1.2

### A webpack integration for Phoenix 1.2. 

Includes an original untouched phoenix 1.2 install as initial commit, then the modifications needed to run webpack as second commit, so you can spot the differences.

Mostly inspired from the blog post [using-webpack-with-phoenix-and-elixir](http://matthewlehner.net/using-webpack-with-phoenix-and-elixir/), but modified slightly in the following ways:

## Installation

Clone this repository

Then:

    mix deps.get

    npm install

    mix phoenix.server


### File loader

Due to trouble with loading the fonts included from ```web/static/css/app.css``` included with phoenix, the webpack file-loader was added to simply copy the fonts into the static folder in the priv dir. 

Also, the bootstrap fonts were added to ```web/static/fonts``` and are also included here.

### Simplification of paths

The paths in webpack.config.js were changed slightly. 