import {Component} from 'angular2/core';
import {TaskService} from './task.service';
import {WrongAnswerPipe} from './wrongAnswer.pipe';

@Component({
    selector: 'my-result',
    pipes: [WrongAnswerPipe],
    template: `<div class="errors">
                   <ul>
                     <li *ngFor="#error of store.tasks | wrong">
                        {{error.verb.verb}} <strong>{{error.verb.preposition}}</strong> {{error.verb.object}}
                     </li>
                     <li class="repeat">
                       <a href (click)="resetQuiz($event)"><i class="fa fa-repeat"></i>Otra vez</a>
                     </li>
                   </ul>
               </div>
              `,
    styles: [ require('./result.css') ]
})
export class ResultComponent {
    constructor(public store: TaskService) {
    }

    public resetQuiz(event) {
        this.store.reset();
        event.preventDefault();
    }
}
