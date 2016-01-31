import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {TaskService} from './task.service';

@Component({
    selector: 'my-theory',
    directives: [ROUTER_DIRECTIVES],
    template: `
               <a href class="help" [routerLink]="['Quiz']">
                 <i class="fa fa-times"></i>Cerrar la tabla
               </a>
               <ul>
                 <li *ngFor="#verb of store.verbs">{{verb.verb}} <strong>{{verb.preposition}}</strong> {{verb.object}}
                 </li>
               </ul>
    `,
    styles: [`
        ul {
            padding: 0;
            list-style-type: none
        }
        strong {
            text-transform: uppercase;
            text-decoration: underline;
        }
    `]
})
export class TheoryComponent {
    constructor(public store: TaskService) {
    }
}
