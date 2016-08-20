import {Component} from '@angular/core';

import * as _ from 'underscore';
import {TaskService} from '../task.service';

@Component({
    selector: 'my-lives',
    template: `
        <i *ngFor="let index of lives"
           class="fa"
           [ngClass]="hasLife(index) ? 'fa-heart' : 'fa-heart-o'">
        </i>`,
    styles: [ require('./lives.css') ]
})
export class LivesComponent {
    public lives: number[];

    constructor(private store: TaskService) {
        this.lives = _.range(1, this.store.initialLivesCount + 1);
    }

    private hasLife(index: number) {
        return index <= this.store.livesCount;
    }
}
