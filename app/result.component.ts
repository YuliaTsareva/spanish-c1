import {Component, Input} from 'angular2/core';
import {TaskService} from './task.service';
import {Task} from './task';
import {WrongAnswerPipe} from './wrongAnswer.pipe';

@Component({
    selector: 'my-result',
    pipes: [WrongAnswerPipe],
    template: `<div class="errors">
                   <ul>
                     <li *ngFor="#error of store.tasks | wrong">
                        {{error.verb}} <strong>{{error.preposition}}</strong> {{error.object}}
                     </li>
                     <li class="repeat"><a href (click)="resetQuiz()"><i class="fa fa-repeat"></i> Otra vez</a></li>
                   </ul>
               </div>
              `,
    styles: [`
        .errors:before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }
        .errors {
            text-align: center;
        }
        ul {
            display: inline-block;
            vertical-align: middle;
            padding: 0;
        }
        li {
            list-style-type: none;
            color: #e74c3c;
            font-size: 20px;
            line-height: 1.6;
            white-space: nowrap;
        }
        strong {
            text-transform: uppercase;
            text-decoration: underline;
        }
        .repeat {
            margin-top: 10px;
            text-align: center;
        }
        a {
            font-size: 22px;
        }
    `]
})
export class ResultComponent {
    constructor(public store:TaskService) {
    }

    public resetQuiz() {
        this.store.reset();
    }
}
