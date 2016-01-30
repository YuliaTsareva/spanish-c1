import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {TaskService} from './task.service';

@Component({
    selector: 'my-task',
    directives: [NgClass],
    template: `<h3>
                    <a href="#" class="verb" (mouseenter)="showTranslation()" (mouseout)="hideTranslation()">
                        {{store.task.verb.verb}}</a>
                    <input [(ngModel)]="answer" (keyup.enter)="onEnterPressed()"
                        [readonly]="store.task.isAnswered"
                        class="answer"
                        [ngClass]="{ok: store.task.answerIsRight, error: store.task.answerIsWrong}">
                    <span class="object">{{store.task.verb.object}}</span>
               </h3>
               <div class="result"
                    [ngClass]="{ok: store.task.answerIsRight, error: store.task.answerIsWrong}">
                 <span *ngIf="store.task.answerIsWrong" class="wrong-answer">
                    {{store.task.verb.verb}} <strong>{{store.task.verb.preposition}}</strong> {{store.task.verb.object}}
                 </span>
                 <div class="translation"
                      [ngStyle]="{visibility: store.task.isAnswered || translationIsVisible ? 'visible' : 'hidden'}">
                      {{store.task.verb.translation}}
                 </div>
               </div>`,
    styles: [`
        h3 {
            text-align: center;
        }
        a.verb:hover {
            color: #7f8c8d;
            text-decoration: none;
            border-color: #7f8c8d;
        }
        a:visited, a:active, a:focus {
            color: inherit;
            text-decoration: none;
        }
        .verb {
            border-bottom: 2px #7f8c8d dotted;
            color: inherit;
        }
        input {
            margin: 0 8px;
            width: 150px;
            height: 25px;
            font-size: 26px;
        }
        strong {
            text-transform: uppercase;
            text-decoration: underline;
        }
        input {
            margin-right: 10px;
            text-align: center;
            margin-bottom: 5px;
            border-radius: 100px;
            height: 42px;
            border: 1px solid #eee;
            outline: none;

            margin-top: 10px;
            margin-bottom: 15px;
            vertical-align: middle;
            transition: border-color 0.5s;
        }
        input.ok {
            border: 2px solid #2ecc71;
        }
        input.error {
            border: 2px solid #e74c3c;
        }
        .result {
            font-size: 20px;
            text-align: center;
        }
        .translation {
            color: #7f8c8d;
            font-style: italic;
        }
        .ok, .ok .translation {
            color: #27ae60;
        }
        .error, .error .translation {
            color: #e74c3c;
        }
        @media (max-width: 400px) {
            .verb, .answer, .object {
                display: block;
            }
            .verb {
                border: none;
                text-decoration: underline;
            }
            input {
                width: 100%;
            }
            .result {
                margin-top: 30px;
            }
        }`
    ]
})
export class TaskComponent {
    private answer = '';
    private translationIsVisible = false;

    constructor(public store: TaskService) {
    }

    private onEnterPressed() {
        if (!this.store.task.isAnswered) {
            this.store.checkAnswer(this.answer);
        } else {
            this.answer = '';
            this.translationIsVisible = false;
            this.store.goToNextTask();
        }
    }

    private showTranslation() {
        this.translationIsVisible = true;
    }

    private hideTranslation() {
        this.translationIsVisible = false;
    }
}
