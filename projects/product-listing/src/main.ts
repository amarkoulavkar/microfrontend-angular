import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ProductListingModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(ProductListingModule)
  .catch(err => console.error(err));
