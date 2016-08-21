import * as _ from 'underscore';
import {Component} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
    selector: 'my-lives',
    template: require('./lives.template.html'),
    styles: [ require('./lives.css') ]
})
export class LivesComponent {
    lives: number[];

    constructor(private store: TaskService) {
        this.lives = _.range(1, this.store.initialLivesCount + 1);
    }

    hasLife(index: number) {
        return index <= this.store.livesCount;
    }
}
