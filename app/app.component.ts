import {Component} from 'angular2/core';
import {RouterOutlet} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {QuizComponent} from './quiz/quiz.component';
import {TheoryComponent} from './theory/theory.component';

@Component({
    selector: 'my-app',
    directives: [RouterOutlet, ROUTER_DIRECTIVES],
    template: `
      <router-outlet></router-outlet>
    `
})
@RouteConfig([
    {path: '/', name: 'Quiz', component: QuizComponent},
    {path: '/theory', name: 'Theory', component: TheoryComponent}
])
export class AppComponent {
}
