import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IOConnectNg } from '@interopio/ng';
import IODesktop from "@interopio/desktop";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(
      IOConnectNg.forRoot({holdInit: true, desktop: {factory: IODesktop}})
    )
   ]
};
