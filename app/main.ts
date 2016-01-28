/*
 * Providers provided by Angular
 */
import {bootstrap} from 'angular2/platform/browser';

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
    bootstrap(AppComponent, [TaskService])
        .catch(err => console.error(err));
});
