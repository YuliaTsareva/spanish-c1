import {Component} from '@angular/core';
import {Autofocus} from '../autofocus.directive';
import {TaskService} from '../task.service';

@Component({
    selector: 'my-preposition-task',
    directives: [Autofocus],
    template: require('./prepositionTask.template.html'),
    styles: [require('./prepositionTask.css')]
})
export class PrepositionTaskComponent {
    answer = '';
    translationIsVisible = false;

    constructor(public store: TaskService) {
    }

    onEnterPressed() {
        if (!this.store.task.isAnswered) {
            this.store.checkAnswer(this.answer);
        } else {
            this.answer = '';
            this.translationIsVisible = false;
            this.store.goToNextTask();
        }
    }

    showTranslation() {
        this.translationIsVisible = true;
    }

    hideTranslation() {
        this.translationIsVisible = false;
    }
}
