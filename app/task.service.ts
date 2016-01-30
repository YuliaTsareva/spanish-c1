import * as _ from 'underscore';
import {Injectable} from 'angular2/core';

import {Task} from './task';
import {Verb} from './verb';

const verbs = _.filter<Verb>(require('../data/verbs.csv'), item => !!item.translation);

@Injectable()
export class TaskService {
    private tasks: Task[];

    private currentTask: Task;
    private tasksDoneCount: number;

    constructor() {
        this.reset();
    }

    public reset() {
        this.tasksDoneCount = 0;

        this.tasks = <Task[]>_.chain(verbs)
            .map(verb => new Task(verb))
            .sample(10)
            .value();

        this.currentTask = this.tasks[0];
    }

    public get task() {
        return this.currentTask;
    }

    public noMoreQuestions() {
        return !this.currentTask;
    }

    public get totalCount() {
        return this.tasks.length;
    }

    public get doneCount() {
        return this.tasksDoneCount;
    }

    public checkAnswer(answer: string) {
        this.currentTask.checkAnswer(answer);
        this.tasksDoneCount++;
    }

    public goToNextTask() {
        this.currentTask = this.tasksDoneCount < this.tasks.length ? this.tasks[this.tasksDoneCount] : null;
    }

    public get verbs(): Verb[] {
        return verbs;
    }
}
