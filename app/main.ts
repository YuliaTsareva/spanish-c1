/*
 * Providers provided by Angular
 */
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HashLocationStrategy} from 'angular2/router';
import {LocationStrategy} from 'angular2/router';
import {provide, enableProdMode} from 'angular2/core';

if (process.env.ENV === 'production') {
    enableProdMode();
}

/*
 * App Component
 * our top level component that holds all of our components
 */
import {AppComponent} from './app.component';
import {TaskService} from './task.service';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
document.addEventListener('DOMContentLoaded', function main() {
    bootstrap(AppComponent, [
            TaskService,
            ROUTER_PROVIDERS,
            provide(LocationStrategy, {useClass: HashLocationStrategy})
        ])
        .catch(err => console.error(err));
});
