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

    private _initialLivesCount = 3;
    private _livesCount: number;

    constructor() {
        this.reset();
    }

    public reset() {
        this.tasksDoneCount = 0;
        this._livesCount = this._initialLivesCount;

        this.tasks = <Task[]>_.chain(verbs)
            .map(verb => Task.create(verb))
            .sample(20)
            .value();

        this.currentTask = this.tasks[0];
    }

    public get task() {
        return this.currentTask;
    }

    public noMoreQuestions() {
        return !this.currentTask || this._livesCount === 0;
    }

    public get totalCount() {
        return this.tasks.length;
    }

    public get doneCount() {
        return this.tasksDoneCount;
    }

    public get livesCount() {
        return this._livesCount;
    }

    public get initialLivesCount() {
        return this._initialLivesCount;
    }

    public checkAnswer(answer: string) {
        this.currentTask.checkAnswer(answer);
    }

    public goToNextTask() {
        if (this.currentTask.answerIsWrong) {
            this._livesCount--;
        }

        if (this._livesCount > 0) {
            this.tasksDoneCount++;
        }

        this.currentTask = this.tasksDoneCount < this.tasks.length && this._livesCount > 0
                           ? this.tasks[this.tasksDoneCount]
                           : null;
    }

    public get verbs(): Verb[] {
        return verbs;
    }
}
