const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  output: {
    uniqueName: 'shoppingCart',
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shoppingCart',
      filename: 'remoteEntry.js',
      exposes: {
        './shoppingCart': './projects/shopping-carts/src/app/app.module.ts',
      },
      shared: ['@angular/core', '@angular/common', '@angular/router'],
    }),
  ],
};