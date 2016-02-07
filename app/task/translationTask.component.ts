import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {Autofocus} from '../autofocus.directive';
import {TaskService} from '../task.service';

@Component({
    selector: 'my-translation-task',
    directives: [NgClass, Autofocus],
    template: `<h3>
                    <div class="translation">{{store.task.verb.translation}}</div>
                    <input [(ngModel)]="answer" (keyup.enter)="onEnterPressed()"
                        [readonly]="store.task.isAnswered"
                        class="answer" autofocus
                        [ngClass]="{ok: store.task.answerIsRight, error: store.task.answerIsWrong}">
                    <span class="object">{{store.task.verb.object}}</span>
               </h3>
               <div class="result"
                    [ngClass]="{ok: store.task.answerIsRight, error: store.task.answerIsWrong}">
                 <span *ngIf="store.task.answerIsWrong" class="wrong-answer">
                    {{store.task.verb.verb}} <strong>{{store.task.verb.preposition}}</strong> {{store.task.verb.object}}
                 </span>
               </div>`,
    styles: [ require('./translationTask.css') ]
})
export class TranslationTaskComponent {
    private answer = '';

    constructor(public store: TaskService) {
    }

    private onEnterPressed() {
        if (!this.store.task.isAnswered) {
            this.store.checkAnswer(this.answer);
        } else {
            this.answer = '';
            this.store.goToNextTask();
        }
    }
}
