import {Component} from '@angular/core';

import {TaskService} from '../task.service';
import {ProgressComponent} from '../progress/progress.component';
import {TaskComponent} from '../task/task.component';
import {ResultComponent} from '../result/result.component';
import {LivesComponent} from '../lives/lives.component';

@Component({
    selector: 'my-quiz',
    directives: [ProgressComponent, TaskComponent, ResultComponent, LivesComponent],
    template: `<a href class="help" routerLink="/theory">
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
