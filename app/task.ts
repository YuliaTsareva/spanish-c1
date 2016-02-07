import {Verb} from './verb';

export class Task {
    public answer: string;

    public isAnswered = false;
    public answerIsRight = false;

    public type;

    constructor(public verb: Verb) {
    }

    public static create(verb: Verb): Task {
        if (Math.random() < 0.5) {
            return new PrepositionTask(verb);
        } else {
            return new TranslationTask(verb);
        }
    }

    public checkAnswer(answer: string) {
        this.answer = answer.toLowerCase();
        this.isAnswered = true;
    }

    public get answerIsWrong() {
        return this.isAnswered && !this.answerIsRight;
    }
}

class PrepositionTask extends Task {
    constructor(public verb: Verb) {
        super(verb);
        this.type = 'preposition';
    }

    public checkAnswer(answer: string) {
        super.checkAnswer(answer);

        this.answerIsRight = this.verb.preposition === this.answer;
    }
}

class TranslationTask extends Task {
    constructor(public verb: Verb) {
        super(verb);
        this.type = 'translation';
    }

    public checkAnswer(answer: string) {
        super.checkAnswer(answer);

        let rightAnswer = this.verb.verb;

        if (this.verb.preposition) {
            rightAnswer += ' ' + this.verb.preposition;
        }

        this.answerIsRight = rightAnswer === this.answer;
    }
}
