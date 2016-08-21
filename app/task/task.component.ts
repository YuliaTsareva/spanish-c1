import {Component} from '@angular/core';

import {TaskService} from '../task.service';
import {PrepositionTaskComponent} from './prepositionTask.component';
import {TranslationTaskComponent} from './translationTask.component';

@Component({
    selector: 'my-task',
    directives: [PrepositionTaskComponent, TranslationTaskComponent],
    template: `<my-preposition-task *ngIf="store.task.type === 'preposition'"></my-preposition-task>
               <my-translation-task *ngIf="store.task.type === 'translation'"></my-translation-task>`
})
export class TaskComponent {
    constructor(public store: TaskService) {
    }
}
