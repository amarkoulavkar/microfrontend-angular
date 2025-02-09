// webpack.config.js

const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  output: {
    uniqueName: 'mainApp',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mainApp',
      remotes: {
        productListing: 'productListing@https://localhost:3001/remoteEntry.js',
        shoppingCart: 'shoppingCart@https://localhost:3002/remoteEntry.js',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};