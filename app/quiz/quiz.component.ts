import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {TaskService} from '../task.service';
import {ProgressComponent} from '../progress/progress.component';
import {TaskComponent} from '../task/task.component';
import {ResultComponent} from '../result/result.component';
import {LivesComponent} from '../lives/lives.component';

@Component({
    selector: 'my-quiz',
    directives: [ROUTER_DIRECTIVES, ProgressComponent, TaskComponent, ResultComponent, LivesComponent],
    template: `<a href class="help" [routerLink]="['Theory']">
                 <i class="fa fa-question-circle"></i>Tabla de verbos
               </a>
               <my-lives></my-lives>
               <div *ngIf="store.task">
                 <my-progress [max]="store.totalCount" [value]="store.doneCount"></my-progress>
                 <my-task></my-task>
               </div>
               <my-result *ngIf="store.noMoreQuestions()"></my-result>`,
    styles: [ require('./quiz.css') ]
})
export class QuizComponent {
    constructor(public store: TaskService) {
    }
}
