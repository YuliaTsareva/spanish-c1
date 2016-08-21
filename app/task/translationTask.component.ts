import {Component} from '@angular/core';
import {Autofocus} from '../autofocus.directive';
import {TaskService} from '../task.service';

@Component({
    selector: 'my-translation-task',
    directives: [Autofocus],
    template: require('./translationTask.template.html'),
    styles: [ require('./translationTask.css') ]
})
export class TranslationTaskComponent {
    answer = '';

    constructor(public store: TaskService) {
    }

    onEnterPressed() {
        if (!this.store.task.isAnswered) {
            this.store.checkAnswer(this.answer);
        } else {
            this.answer = '';
            this.store.goToNextTask();
        }
    }
}
