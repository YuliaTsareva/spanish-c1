import {Component} from 'angular2/core';
import {NgFor, NgClass} from 'angular2/common';

import * as _ from 'underscore';
import {TaskService} from '../task.service';

@Component({
    selector: 'my-lives',
    directives: [NgFor, NgClass],
    template: `
        <template ngFor [ngForOf]="lives" #index="index">
            <i class="fa" [ngClass]="hasLife(index) ? 'fa-heart' : 'fa-heart-o'"></i>
        </template>`,
    styles: [ require('./lives.css') ]
})
export class LivesComponent {
    private lives: number[];

    constructor(private store: TaskService) {
        this.lives = _.range(1, this.store.initialLivesCount + 1);
    }

    private hasLife(index: number) {
        return index < this.store.livesCount;
    }
}
