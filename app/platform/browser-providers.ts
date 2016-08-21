/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
// Angular 2 Http
import {HTTP_PROVIDERS} from '@angular/http';
// Angular 2 Router
import {provideRouter} from '@angular/router';

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';
//
//
import {routes} from '../app.routes';
// import { APP_RESOLVER_PROVIDERS } from '../app/app.resolver';
/*
 * Application Providers/Directives/Pipes
 * providers/directives/pipes that only live in our browser environment
 */
export const APPLICATION_PROVIDERS = [
    // ...APP_RESOLVER_PROVIDERS,

    provideRouter(routes),

    ...HTTP_PROVIDERS,

    {provide: LocationStrategy, useClass: HashLocationStrategy}
];

export const PROVIDERS = [
    ...APPLICATION_PROVIDERS
];
