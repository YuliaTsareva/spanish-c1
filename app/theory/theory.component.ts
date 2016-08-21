import {Component} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
    selector: 'my-theory',
    template: require('./theory.template.html')
})
export class TheoryComponent {
    constructor(public store: TaskService) {
    }
}
