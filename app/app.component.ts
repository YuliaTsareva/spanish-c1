import {Component} from 'angular2/core';

import {TaskService} from './task.service';
import {ProgressComponent} from './progress.component';
import {TaskComponent} from './task.component';
import {ResultComponent} from './result.component';
import {TheoryComponent} from './theory.component';

@Component({
    selector: 'my-app',
    directives: [ProgressComponent, TaskComponent, ResultComponent, TheoryComponent],
    template: `<a *ngIf="!theoryIsShown" href class="help" (click)="toggleTheory($event)">
                 <i class="fa fa-question-circle"></i>Tabla de verbos
               </a>
               <a *ngIf="theoryIsShown" href class="help" (click)="toggleTheory($event)">
                 <i class="fa fa-times"></i>Cerrar la tabla
               </a>
               <div *ngIf="store.task">
                 <my-progress [max]="store.totalCount" [value]="store.doneCount"></my-progress>
                 <my-task>
                 </my-task>
               </div>
               <my-result *ngIf="store.noMoreQuestions()"></my-result>
               <my-theory *ngIf="theoryIsShown"></my-theory>`,
    styles: [`
        my-task {
            display: block;
            padding: 5px 0;
            margin-top: 115px;
        }
        .help {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 18px;
        }
        .fa {
            margin-right: 5px;
        }
        my-theory {
            position: absolute;
            background-color: white;
            top: 50px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            font-size: 15px;
            line-height: 24px;
            padding: 20px 15px 10px 40px;
        }
        @media (max-width: 767px) {
            my-task {
                margin-top: 60px;
            }
        }`
    ]
})
export class AppComponent {
    private theoryIsShown: boolean;

    constructor(public store: TaskService) {
    }

    private toggleTheory(event) {
        this.theoryIsShown = !this.theoryIsShown;
        event.preventDefault();
    }
}
