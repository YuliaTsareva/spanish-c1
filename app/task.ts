export class Task {
    public isAnswered: boolean;
    public answer: string;
    public answerIsRight: boolean;

    constructor(public verb: string, public preposition: string, public object: string, public translation: string) {
    }

    public checkAnswer(answer: string) {
        if (this.preposition === answer.toLowerCase()) {
            this.answerIsRight = true;
        }

        this.answer = answer.toLowerCase();
        this.isAnswered = true;
    }

    public get answerIsWrong() {
        return this.isAnswered && !this.answerIsRight;
    }
}
