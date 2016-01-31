import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {TaskService} from './task.service';
import {ProgressComponent} from './progress.component';
import {TaskComponent} from './task.component';
import {ResultComponent} from './result.component';
import {TheoryComponent} from './theory.component';

@Component({
    selector: 'my-quiz',
    directives: [ROUTER_DIRECTIVES, ProgressComponent, TaskComponent, ResultComponent, TheoryComponent],
    template: `<a href class="help" [routerLink]="['Theory']">
                 <i class="fa fa-question-circle"></i>Tabla de verbos
               </a>
               <div *ngIf="store.task">
                 <my-progress [max]="store.totalCount" [value]="store.doneCount"></my-progress>
                 <my-task>
                 </my-task>
               </div>
               <my-result *ngIf="store.noMoreQuestions()"></my-result>
               <my-theory *ngIf="theoryIsShown"></my-theory>`,
    styles: [ require('./quiz.css') ]
})
export class QuizComponent {
    constructor(public store: TaskService) {
    }
}