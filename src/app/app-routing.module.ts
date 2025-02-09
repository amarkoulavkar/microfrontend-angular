import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'product-listing',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'productListing',
        exposedModule: './ProductListingModule',
      }).then((m) => m.ProductListingModule),
  },
  {
    path: 'shopping-cart',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'shoppingCart',
        exposedModule: './ShoppingCartModule',
      }).then((m) => m.ShoppingCartModule),
  },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule {}