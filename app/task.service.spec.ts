import {TaskService} from './task.service';

describe('TaskService', () => {
    let taskService;

    beforeEach(() => {
        taskService = new TaskService();
    });

    it('should read verbs from CSV', () => {
        expect(taskService.verbs.length).toBeGreaterThan(0);
    });
});
