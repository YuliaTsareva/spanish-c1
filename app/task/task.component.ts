import {Component} from '@angular/core';

import {TaskService} from '../task.service';
import {PrepositionTaskComponent} from './prepositionTask.component';
import {TranslationTaskComponent} from './translationTask.component';

@Component({
    selector: 'my-task',
    directives: [PrepositionTaskComponent, TranslationTaskComponent],
    template: require('./task.template.html')
})
export class TaskComponent {
    constructor(public store: TaskService) {
    }
}
