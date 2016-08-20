import {Component} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
    selector: 'my-theory',
    template: `
               <a href class="help" routerLink="/">
                 <i class="fa fa-times"></i>Cerrar la tabla
               </a>
               <ul>
                 <li *ngFor="let verb of store.verbs">
                    {{verb.verb}}
                    <strong>{{verb.preposition}}</strong>
                    {{verb.object}}
                 </li>
               </ul>
    `
})
export class TheoryComponent {
    constructor(private store: TaskService) {
    }
}
