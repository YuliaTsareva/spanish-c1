webpackJsonp([3],{0:function(module,exports,__webpack_require__){var context=__webpack_require__(392);context.keys().forEach(context)},346:function(module,exports){"use strict";var Verb=function(){function Verb(verb,preposition,object,translation){this.verb=verb,this.preposition=preposition,this.object=object,this.translation=translation}return Verb}();exports.Verb=Verb},392:function(module,exports,__webpack_require__){function webpackContext(req){return __webpack_require__(webpackContextResolve(req))}function webpackContextResolve(req){return map[req]||function(){throw new Error("Cannot find module '"+req+"'.")}()}var map={"./result/wrongAnswer.pipe.spec.ts":507,"./task.service.spec.ts":508,"./task.spec.ts":509};webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=392},507:function(module,exports,__webpack_require__){"use strict";var wrongAnswer_pipe_1=__webpack_require__(345),verb_1=__webpack_require__(346),task_1=__webpack_require__(219);describe("WrongAnswerPipe",function(){var verb,task,pipe;beforeEach(function(){verb=new verb_1.Verb("depender","de","algo","зависеть от чего-либо"),task=new task_1.PrepositionTask(verb),pipe=new wrongAnswer_pipe_1.WrongAnswerPipe}),it("should return empty array for empty list of tasks",function(){expect(pipe.transform([])).toEqual([])}),it("should filter out task with right answer",function(){task.checkAnswer(verb.preposition),expect(pipe.transform([task])).toEqual([])}),it("should return task with wrong answer",function(){task.checkAnswer("wrong"),expect(pipe.transform([task])).toEqual([task])})})},508:function(module,exports,__webpack_require__){"use strict";var task_service_1=__webpack_require__(47);describe("TaskService",function(){var taskService;beforeEach(function(){taskService=new task_service_1.TaskService}),it("should read verbs from CSV",function(){expect(taskService.verbs.length).toBeGreaterThan(0)})})},509:function(module,exports,__webpack_require__){"use strict";var verb_1=__webpack_require__(346),task_1=__webpack_require__(219);describe("Task",function(){var verb,task;beforeEach(function(){verb=new verb_1.Verb("depender","de","algo","зависеть от чего-либо"),task=new task_1.PrepositionTask(verb)}),describe("without answer",function(){it("answer should be undefined",function(){expect(task.answer).toBeUndefined()}),it("isAnswered should be false",function(){expect(task.isAnswered).toBe(!1)}),it("answerIsWrong should be false",function(){expect(task.answerIsWrong).toBe(!1)}),it("answerIsRight should be false",function(){expect(task.answerIsRight).toBe(!1)})}),describe("checkAnswer",function(){describe("answer is right",function(){beforeEach(function(){task.checkAnswer(verb.preposition)}),it("should save answer",function(){expect(task.answer).toBe(verb.preposition)}),it("isAnswered should be true",function(){expect(task.isAnswered).toBe(!0)}),it("answerIsWrong should be false",function(){expect(task.answerIsWrong).toBe(!1)}),it("answerIsRight should be true",function(){expect(task.answerIsRight).toBe(!0)})}),describe("answer is wrong",function(){beforeEach(function(){task.checkAnswer("wrong")}),it("should save answer",function(){expect(task.answer).toBe("wrong")}),it("isAnswered should be true",function(){expect(task.isAnswered).toBe(!0)}),it("answerIsWrong should be true",function(){expect(task.answerIsWrong).toBe(!0)}),it("answerIsRight should be false",function(){expect(task.answerIsRight).toBe(!1)})})})})}});