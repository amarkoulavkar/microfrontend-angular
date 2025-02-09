import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ShoppingCartModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(ShoppingCartModule)
  .catch(err => console.error(err));
