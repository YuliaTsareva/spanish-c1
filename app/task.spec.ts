import {Verb} from './verb';
import {Task} from './task';

describe('Task', () => {
    let verb: Verb;
    let task: Task;

    beforeEach(() => {
        verb = new Verb('depender', 'de', 'algo', 'зависеть от чего-либо');
        task = new Task(verb);
    });

    describe('without answer', () => {
        it('answer should be undefined', () => {
            expect(false).toBe(true);
            expect(task.answer).toBeUndefined();
        });

        it('isAnswered should be false', () => {
            expect(task.isAnswered).toBe(false);
        });

        it('answerIsWrong should be false', () => {
            expect(task.answerIsWrong).toBe(false);
        });

        it('answerIsRight should be false', () => {
            expect(task.answerIsRight).toBe(false);
        });
    });

    describe('checkAnswer', () => {
        describe('answer is right', () => {
            beforeEach(() => {
                task.checkAnswer(verb.preposition);
            });

            it('should save answer', () => {
                expect(task.answer).toBe(verb.preposition);
            });

            it('isAnswered should be true', () => {
                expect(task.isAnswered).toBe(true);
            });

            it('answerIsWrong should be false', () => {
                expect(task.answerIsWrong).toBe(false);
            });

            it('answerIsRight should be true', () => {
                expect(task.answerIsRight).toBe(true);
            });
        });

        describe('answer is wrong', () => {
            beforeEach(() => {
                task.checkAnswer('wrong');
            });

            it('should save answer', () => {
                expect(task.answer).toBe('wrong');
            });

            it('isAnswered should be true', () => {
                expect(task.isAnswered).toBe(true);
            });

            it('answerIsWrong should be true', () => {
                expect(task.answerIsWrong).toBe(true);
            });

            it('answerIsRight should be false', () => {
                expect(task.answerIsRight).toBe(false);
            });
        });
    });
});
