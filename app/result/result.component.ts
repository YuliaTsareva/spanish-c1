import {Component} from '@angular/core';
import {TaskService} from '../task.service';
import {WrongAnswerPipe} from './wrongAnswer.pipe';

@Component({
    selector: 'my-result',
    pipes: [WrongAnswerPipe],
    template: require('./result.template.html'),
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
