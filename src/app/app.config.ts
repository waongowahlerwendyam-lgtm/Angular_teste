import { Import } from './../../node_modules/@angular/cdk/schematics/update-tool/utils/imports.d';
import { ApplicationConfig} from '@angular/core';
import { withHashLocation } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withHashLocation()),
    provideHttpClient()
  ]
};
