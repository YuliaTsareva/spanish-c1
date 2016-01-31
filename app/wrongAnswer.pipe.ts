import {Pipe} from 'angular2/core';
import {Task} from './task';

@Pipe({
    name: 'wrong'
})
export class WrongAnswerPipe {
    transform(value: Task[]) {
        return value.filter((task: Task) => task.answerIsWrong);
    }
}
