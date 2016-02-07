import {WrongAnswerPipe} from './wrongAnswer.pipe';
import {Task} from '../task';
import {Verb} from '../verb';

describe('WrongAnswerPipe', () => {
    let verb: Verb;
    let task: Task;

    let pipe: WrongAnswerPipe;

    beforeEach(() => {
        verb = new Verb('depender', 'de', 'algo', 'зависеть от чего-либо');
        task = new Task(verb);

        pipe = new WrongAnswerPipe();
    });

    it('should return empty array for empty list of tasks', () => {
        expect(pipe.transform([])).toEqual([]);
    });

    it('should filter out task with right answer', () => {
        task.checkAnswer(verb.preposition);

        expect(pipe.transform([task])).toEqual([]);
    });

    it('should return task with wrong answer', () => {
        task.checkAnswer('wrong');

        expect(pipe.transform([task])).toEqual([task]);
    });
});
