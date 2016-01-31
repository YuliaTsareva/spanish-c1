import {Verb} from './verb';

export class Task {
    public answer: string;

    public isAnswered = false;
    public answerIsRight = false;

    constructor(public verb: Verb) {
    }

    public checkAnswer(answer: string) {
        if (this.verb.preposition === answer.toLowerCase()) {
            this.answerIsRight = true;
        }

        this.answer = answer.toLowerCase();
        this.isAnswered = true;
    }

    public get answerIsWrong() {
        return this.isAnswered && !this.answerIsRight;
    }
}
