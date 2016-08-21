import {Component} from '@angular/core';

import {TaskService} from '../task.service';
import {ProgressComponent} from '../progress/progress.component';
import {TaskComponent} from '../task/task.component';
import {ResultComponent} from '../result/result.component';
import {LivesComponent} from '../lives/lives.component';

@Component({
    selector: 'my-quiz',
    directives: [
        ProgressComponent,
        TaskComponent,
        ResultComponent,
        LivesComponent
    ],
    template: require('./quiz.template.html'),
    styles: [require('./quiz.css')]
})
export class QuizComponent {
    constructor(public store: TaskService) {
    }
}
