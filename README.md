# Webpack Integration for Phoenix Framework 1.2

### A webpack integration for Phoenix 1.2.

Includes an original untouched phoenix 1.2 install as initial commit, then the modifications needed to run webpack as second commit, so you can spot the differences.

It includes live reloading of both views, templates and static assets, just as the standard Phoenix configuration.

In a short while I will add Typescript to the project as well.

## Installation

Clone this repository

Then:

    mix deps.get

    npm install

    mix phoenix.server

## How it was made

This repo was mostly inspired from the blog post [using-webpack-with-phoenix-and-elixir](http://matthewlehner.net/using-webpack-with-phoenix-and-elixir/), but modified slightly in the following ways:


### File loader

Due to trouble with loading the fonts included from ```web/static/css/app.css``` included with phoenix, the webpack file-loader was added to simply copy the fonts into the static folder in the priv dir.

Also, the bootstrap fonts were added to ```web/static/fonts``` and are also included here. This serves the purpose of rendering the default front page without errors.

### Simplification of paths

The paths in webpack.config.js were changed slightly.
