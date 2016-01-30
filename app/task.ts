import {Verb} from './verb';

export class Task {
    public isAnswered: boolean;
    public answer: string;
    public answerIsRight: boolean;

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
