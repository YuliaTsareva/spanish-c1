import {bootstrap} from '@angular/platform-browser-dynamic';

import {PLATFORM_PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS, decorateComponentRef} from './platform/environment';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {AppComponent} from './app.component';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
export function main(): Promise<any> {

    return bootstrap(AppComponent, [
        // To add more vendor providers please look in the platform/ folder
        ...PLATFORM_PROVIDERS,
        ...ENV_PROVIDERS
    ])
        .then(decorateComponentRef)
        .catch(err => console.error(err));

}

document.addEventListener('DOMContentLoaded', () => main());
