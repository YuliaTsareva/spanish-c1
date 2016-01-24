import {Component} from 'angular2/core';

import {TaskService} from './task.service';
import {ProgressComponent} from './progress.component';
import {TaskComponent} from './task.component';
import {Task} from './task';
import {ResultComponent} from './result.component';

@Component({
    selector: 'my-app',
    directives: [ProgressComponent, TaskComponent, ResultComponent],
    template: `<div *ngIf="store.task">
                 <my-progress [max]="store.totalCount" [value]="store.doneCount"></my-progress>
                 <my-task>
                 </my-task>
               </div>
               <my-result *ngIf="store.noMoreQuestions()"></my-result>`,
    styles: [`
        my-task {
            display: block;
            padding: 5px 0;
            margin-top: 115px;
        }
        @media (max-width: 767px) {
            my-task {
                margin-top: 60px;
            }
        }`
    ]
})
export class AppComponent {
    constructor(public store:TaskService) {
    }
}
